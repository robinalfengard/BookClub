package com.example.BookClub.Controllers;

import com.example.BookClub.Entities.User;
import com.example.BookClub.Repositories.UserRepository;
import com.example.BookClub.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//CORS PROBLEM
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @GetMapping("/list")
    public ResponseEntity<List<User>> getUsers(){
        return ResponseEntity.ok(userRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String id){return (userService.getUserById(id));}

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user){
       return ResponseEntity.ok(userRepository.save(user));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id){
        return userService.deleteById(id);
    }

    @GetMapping("/get/{name}")
    public  ResponseEntity<String> getUserIdByName(@PathVariable String name) {return userService.getUserByName(name);}



}
