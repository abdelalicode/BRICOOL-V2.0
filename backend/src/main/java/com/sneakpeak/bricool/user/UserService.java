package com.sneakpeak.bricool.user;

import com.sneakpeak.bricool.exception.NotFoundException;
import com.sneakpeak.bricool.role.Role;
import com.sneakpeak.bricool.role.RoleRepository;
import com.sneakpeak.bricool.role.RoleType;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final ModelMapper modelMapper;


    public UserService(UserRepository userRepository, RoleRepository roleRepository, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
        this.modelMapper = modelMapper;
    }

    @Transactional
    public User createUser(User user) {

        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            throw new RuntimeException("Email already exists.");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setId(null);

        Role defaultRole = roleRepository.findByname(RoleType.CLIENT);
        user.setRole(defaultRole);


        return userRepository.save(user);

    }

    public Optional<User> validateUser(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent() && passwordEncoder.matches(password, user.get().getPassword())) {
            return user;
        }
        return Optional.empty();
    }

    public User updateUser(User userInfos, String userMail) {

        User existingUser = userRepository.findByEmail(userMail)
                .orElseThrow(() -> new NotFoundException("User not found"));

        modelMapper.map(userInfos, existingUser);

        return userRepository.save(existingUser);

    }

    public Optional<List<User>> findAllUsers() {
        return Optional.of(userRepository.findAll());
    }


    public User getClient(String username) {
        return userRepository.findByEmail(username)
                .orElse(null);
    }

    public User updateUserRole(@Valid UserDTO userDTO, String str) {
        User existingUser = userRepository.findByEmail(str)
                .orElseThrow(() -> new NotFoundException("User not found"));

        Role role = roleRepository.findById(userDTO.getRole_id()).orElse(null);

        if(role != null) {
            existingUser.setRole(role);
            return userRepository.save(existingUser);
        }
        return null;
    }

    public List<User> findAllWorkers() {
        return userRepository.findAll().stream()
                .filter(user -> user.getRole().getName().equals(RoleType.WORKER))
                .toList();
    }

    public Optional<Worker> getWorker(Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent() && user.get() instanceof Worker) {
            return Optional.of((Worker) user.get());
        }
        return Optional.empty();
    }

}
