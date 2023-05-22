package com.example.BookClub.Repositories;

import com.example.BookClub.Entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {

    ResponseEntity<List<Book>> getBooksByUserID(Long id);
}
