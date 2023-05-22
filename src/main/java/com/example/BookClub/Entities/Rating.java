package com.example.BookClub.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "RATING")
public class Rating {
    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String rating;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    User user;

    @ManyToOne
    @JoinColumn(name = "BOOK_ID")
    Book book;

}
