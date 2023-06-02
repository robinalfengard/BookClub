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
    @JoinColumn(name = "HOST_ID")
    User host;

    @Transient
    String userIdForConstructor;


/*    @ManyToOne
    @JoinColumn(name = "BOOK_ID")
    Book book;

    @Transient
    String bookIdForConstructor;*/

    @Column(name = "BOOK_ID_FROM_API")
    String bookIdFromApi;

    @Column(name = "DATE")
    String date;


    // Create meeting for DB


    public Meeting(User host, String bookIdFromApi, String date) {
        this.host = host;
        this.bookIdFromApi = bookIdFromApi;
        this.date = date;
    }

    // Create meeting with JSON
    public Meeting(String bookIdFromApi, String userIdForConstructor, String date) {
        this.bookIdFromApi = bookIdFromApi;
        this.userIdForConstructor = userIdForConstructor;
        this.date = date;
    }


}
