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
import java.util.NoSuchElementException;
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


    public ResponseEntity<String> saveBookByBody(Book book) {
        Long userId = Long.parseLong(book.getUserIdForConstructor());
        User user = userRepository.findById(userId).orElseThrow(() -> new NoSuchElementException("User not found"));
        Book newBook = new Book(user, book.getTitle(), book.getAuthor(), book.getThumb(), book.getIdFromApi());
        bookRepository.save(newBook);
        return ResponseEntity.ok("Record saved successfully");

    }


    public ResponseEntity<Book> getBookById(Long id) {
        Optional<Book> book = bookRepository.findById(id);
        return book.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());

    }

    public String findThumbById(String bookIdFromApi) {
        Book book = bookRepository.findBookByIdFromApi(bookIdFromApi);
        if (book == null) {
            return "Book with that id not found";
        }
        return book.getThumb();
    }



}
