package com.example.BookClub.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "MEETING")
public class Meeting {
    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;


    @ManyToOne
    @JoinColumn(name = "BOOK_ID")
    Book book;

    @Transient
    String bookIdForConstructor;

    String date;


    public Meeting(Book book, String date) {
        this.book = book;
        this.date = date;
    }
}
