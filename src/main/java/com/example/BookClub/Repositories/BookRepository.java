package com.example.BookClub.Repositories;

import com.example.BookClub.Entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    ResponseEntity<List<Book>> getBooksByUserID(Long id);
}
