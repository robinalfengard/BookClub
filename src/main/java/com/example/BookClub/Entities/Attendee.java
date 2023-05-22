package com.example.BookClub.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "ATTENDEE")
public class Attendee {
    @Column(name = "IDENTITY")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    @JoinColumn(name = "MEETING-ID")
    Meeting meeting;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    User user;


}
