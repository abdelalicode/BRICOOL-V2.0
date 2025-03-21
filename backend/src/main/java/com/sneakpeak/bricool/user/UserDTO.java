package com.sneakpeak.bricool.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private Integer age;
    private String address;
    private Integer role_id;

    @Email
    private String email;

    private String password;

    private String phone;

}
