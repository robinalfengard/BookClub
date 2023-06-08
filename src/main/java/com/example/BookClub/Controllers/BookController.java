package com.example.BookClub.Controllers;

import com.example.BookClub.Entities.Book;
import com.example.BookClub.Entities.User;
import com.example.BookClub.Repositories.BookRepository;
import com.example.BookClub.Repositories.UserRepository;
import com.example.BookClub.Services.BookService;
import org.apache.logging.log4j.util.PerformanceSensitive;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/book")
public class BookController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    BookRepository bookRepository;
    @Autowired
    BookService bookService;


    @GetMapping("/user/{id}")
    public List<Book> getBooksByUserId(@PathVariable Long id) {
        return bookService.getBooksByUserIdService(id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBook(@PathVariable Long id) {
        return bookService.getBookById(id);
    }

    @GetMapping("/id/{idFromApi}")
    public ResponseEntity<Book> getBookByApi(@PathVariable String idFromApi) {
        return bookService.getBookByIdFromApi(idFromApi);
    }


    @GetMapping("/all")
    public List<Book> getAll() {
        return bookRepository.findAll();
    }

    @PostMapping("/add")
    public ResponseEntity<String> addBook(@RequestBody Book book) {
        bookService.saveBookByBody(book);
        return ResponseEntity.ok("Book Successfully Saved");
    }

    @GetMapping("/isPresent/{bookIdFromApi}")
    public ResponseEntity<Boolean> isPresent(@PathVariable String bookIdFromApi) {
        return bookService.isPresent(bookIdFromApi);
    }

    @DeleteMapping("/{id}")
    public String deleteBook(@PathVariable Long id){
         bookRepository.deleteById(id);
         return "Book with id" + id + "deleted";
    }

}
