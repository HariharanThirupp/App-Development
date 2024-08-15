package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.User;
import com.example.demo.Repository.UserRepo;

@Service
public class UserService {
    
    @Autowired
    UserRepo repo;

    public User addUser(User o)
    {
        return repo.save(o);
    }
}
