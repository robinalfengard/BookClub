package com.example.BookClub.Services;

import com.example.BookClub.Entities.Book;
import com.example.BookClub.Entities.Meeting;
import com.example.BookClub.Entities.User;
import com.example.BookClub.Repositories.BookRepository;
import com.example.BookClub.Repositories.MeetingRepository;
import com.example.BookClub.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class MeetingService {

    @Autowired
    BookRepository bookRepository;

    @Autowired
    MeetingRepository meetingRepository;
    @Autowired
    private UserRepository userRepository;




    public ResponseEntity<String> saveMeetingByBody(Meeting meeting) {
        Long userId = Long.valueOf(meeting.getUserIdForConstructor());
        System.out.println(userId);
        Book book = bookRepository.findBookByIdFromApi(meeting.getBookIdFromApi());
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            User host = optionalUser.get();
            System.out.println(host);
            Meeting newMeeting = new Meeting(host, book.getIdFromApi(), meeting.getDate());
            meetingRepository.save(newMeeting);
           return ResponseEntity.ok("Meeting successfully saved");
        } else{
            return ResponseEntity.notFound().build();
        }

    }


    public ResponseEntity<String> getMeetingByBookIdFromApi(String bookIdFromApi) {
        Book book = bookRepository.findBookByIdFromApi(bookIdFromApi);
        if (book != null) {
            Meeting meeting = meetingRepository.findMeetingByBookIdFromApi(book.getIdFromApi());
            if (meeting != null){
                return ResponseEntity.ok(meeting.getId().toString());
            }
        }
            // Handle the case when the book is not found
        return ResponseEntity.notFound().build();

    }


}
