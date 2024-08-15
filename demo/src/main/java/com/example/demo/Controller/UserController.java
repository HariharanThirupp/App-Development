package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.User;
import com.example.demo.Service.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin("http://localhost:3000/")
@RestController
public class UserController {
    
    @Autowired
    UserService service;

    @PostMapping("/reg")
    public User postMethodName(@RequestBody User o) {
        return service.addUser(o);
    }
    
}
