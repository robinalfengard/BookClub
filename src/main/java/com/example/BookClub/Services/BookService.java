package com.example.BookClub.Services;

import com.example.BookClub.Entities.Book;
import com.example.BookClub.Entities.User;
import com.example.BookClub.Repositories.BookRepository;
import com.example.BookClub.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class BookService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    BookRepository bookRepository;

    public List<Book> getBooksByUserIdService(@RequestParam Long id){
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + id));
        return bookRepository.getBooksByUserId(id);
    }


}
