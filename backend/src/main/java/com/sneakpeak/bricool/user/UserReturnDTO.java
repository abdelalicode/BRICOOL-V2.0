package com.sneakpeak.bricool.user;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;


@Setter
@Getter
public class UserReturnDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private Integer age;
    private String email;
    private String phone;
    private String address;
    private LocalDateTime memberSince;
    private String roleName;
//    private List<String> ui;
}
