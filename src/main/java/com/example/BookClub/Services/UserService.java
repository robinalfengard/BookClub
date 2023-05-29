package com.example.BookClub.Services;

import com.example.BookClub.Entities.Book;
import com.example.BookClub.Entities.User;
import com.example.BookClub.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserService {

    private final UserRepository userRepository;


    public ResponseEntity<String> deleteById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + id));
        userRepository.deleteById(id);
        return ResponseEntity.ok( "Member with id " + id + " was successfully deleted.");
    }

    public ResponseEntity<User> getUserById(String id) {
        Optional<User> user = userRepository.findById(Long.valueOf(id));
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    public ResponseEntity<String> getUserByName(String name) {
        Optional<User> user = userRepository.findByName(name);
        return user.map(value -> ResponseEntity.ok(value.getId().toString())).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
