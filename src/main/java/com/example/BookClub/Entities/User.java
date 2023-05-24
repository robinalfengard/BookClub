package com.example.BookClub.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "USERS")
@CrossOrigin(origins = "http://localhost:3000")
public class User {

    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "NAME")
    String name;

    @Column(name = "IMG_URL")
    String imgUrl;

    public User(String name) {
        this.name = name;
    }
    public User (String name, String imgUrl){
        this.name = name;
        this.imgUrl = imgUrl;
    }

}
