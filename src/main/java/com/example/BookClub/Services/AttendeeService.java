package com.example.BookClub.Services;

import com.example.BookClub.Entities.Attendee;

import com.example.BookClub.Entities.Meeting;
import com.example.BookClub.Entities.User;

import com.example.BookClub.Repositories.AttendeeRepository;
import com.example.BookClub.Repositories.MeetingRepository;
import com.example.BookClub.Repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AttendeeService {


    @Autowired
    UserRepository userRepository;

    @Autowired
    MeetingRepository meetingRepository;

    @Autowired
    AttendeeRepository attendeeRepository;

    public ResponseEntity<String> saveAttendeeByBody(Attendee attendee) {
        System.out.println(attendee);
        Long userId = Long.parseLong(attendee.getUserIdForConstructor());
        Long meetingId = Long.parseLong(attendee.getMeetingIdForConstructor());
        User user = userRepository.findById(userId).orElseThrow(() -> new NoSuchElementException("User not found"));
        Meeting meeting = meetingRepository.findById(meetingId).orElseThrow(() -> new NoSuchElementException("Meeting not found"));
        Attendee newAttendee = new Attendee(meeting, user);
        attendeeRepository.save(newAttendee);
        return ResponseEntity.ok("Attendee saved successfully");

    }



    public ResponseEntity<List<Attendee>> findAllByMeetingId(String meetingId) {
        Long meetingIdLong = Long.parseLong(meetingId);
        return ResponseEntity.ok( attendeeRepository.findAllByMeetingId(meetingIdLong));

    }
}
