package com.example.BookClub.Controllers;

import com.example.BookClub.Entities.Meeting;
import com.example.BookClub.Repositories.MeetingRepository;
import com.example.BookClub.Services.MeetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/meeting")
public class MeetingController {
    @Autowired
    MeetingRepository meetingRepository;

    @Autowired
    MeetingService meetingService;
    @GetMapping("/list")
    public ResponseEntity<List<Meeting>> getMeetings(){
        return ResponseEntity.ok(meetingRepository.findAll());
    }

    @PostMapping("/add")
        public ResponseEntity<String> addMeeting(@RequestBody Meeting meeting){
            meetingService.saveMeetingByBody(meeting);
            return ResponseEntity.ok("Meeting save successfully");
        }



}
