package com.example.BookClub.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Entity
@Table(name = "ATTENDEE")
public class Attendee {
    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    @JoinColumn(name = "MEETING_ID")
    Meeting meeting;

    @Transient
    String userIdForConstructor;


    @Transient
    String meetingIdForConstructor;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    User user;


    // Constructor for converting JSON from FE
    public Attendee(String meetingIdForConstructor, String userIdForConstructor) {
        this.meetingIdForConstructor = meetingIdForConstructor;
        this.userIdForConstructor = userIdForConstructor;
    }

    public Attendee(Meeting meeting, User user) {
        this.meeting = meeting;
        this.user = user;
    }
}
