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

    @ManyToOne
    @JoinColumn(name = "CHOSEN_BY_USER_ID")
    User user;

    @Transient
    String userIdForConstructor;

    @Column(name = "TITLE")
    String title;

    @Column(name = "AUTHOR")
    String author;

    @Column(name = "THUMB")
    String thumb;

    @Column(name = "ID_FROM_API")
    String idFromApi;

    @Column(name = "COLLECTED_RATING")
    float collectedRating;

    public Book(User chosenBy, String title, String author, String thumb, String idFromApi) {
        this.user = chosenBy;
        this.title = title;
        this.author = author;
        this.thumb = thumb;
        this.idFromApi = idFromApi;
    }

    public Book(String userIdForConstructor, String title, String author, String thumb) {
        this.userIdForConstructor = userIdForConstructor;
        this.title = title;
        this.author = author;
        this.thumb = thumb;
    }



/*    public Book(User chosenBy, String title, String author, String thumb, String idFromApi) {
        this.user = chosenBy;
        this.title = title;
        this.author = author;
        this.thumb = thumb;
        this.idFromApi = idFromApi;
    }*/


}
