package com.example.BookClub.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "BOOK")
public class Book {
    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "TITLE")
    String title;

    @Column(name = "AUTHOR")
    String author;

    @Column(name = "COLLECTED_RATING")
    String collectedRating;

}
