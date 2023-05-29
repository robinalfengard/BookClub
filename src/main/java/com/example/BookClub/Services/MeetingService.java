package com.example.BookClub.Services;

import com.example.BookClub.Entities.Book;
import com.example.BookClub.Entities.Meeting;
import com.example.BookClub.Entities.User;
import com.example.BookClub.Repositories.BookRepository;
import com.example.BookClub.Repositories.MeetingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class MeetingService {

    @Autowired
    BookRepository bookRepository;

    @Autowired
    MeetingRepository meetingRepository;


    public void saveMeetingByBody(Meeting meeting) {
        Long bookId = Long.parseLong(meeting.getBookIdForConstructor());
        Book book = bookRepository.findById(bookId).orElseThrow(() -> new NoSuchElementException("Book not found"));
        Meeting newMeeting = new Meeting(book, meeting.getDate());
        meetingRepository.save(newMeeting);
        ResponseEntity.ok("Meeting successfully saved");

    }




}
