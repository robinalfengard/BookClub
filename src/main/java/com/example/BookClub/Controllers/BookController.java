package com.example.BookClub.Controllers;

import com.example.BookClub.Entities.Book;
import com.example.BookClub.Entities.User;
import com.example.BookClub.Repositories.BookRepository;
import com.example.BookClub.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/book")
public class BookController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    BookRepository bookRepository;

    @GetMapping("/user/{id}")
    public ResponseEntity<List<Book>> getBooksByUserID(@RequestParam Long id){
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()){
            return bookRepository.getBooksByUserID(id);
        }
        else {
            return ResponseEntity.notFound().build();
        }



    }

}
