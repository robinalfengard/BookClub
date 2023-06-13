package com.example.BookClub.Controllers;

import com.example.BookClub.Entities.Attendee;
import com.example.BookClub.Repositories.AttendeeRepository;
import com.example.BookClub.Services.AttendeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/attendee")
public class AttendeeController {
    @Autowired
    AttendeeService attendeeService;
    @Autowired
    private AttendeeRepository attendeeRepository;

    @PostMapping("/add")
    public ResponseEntity<String> addAttendee(@RequestBody Attendee attendee){
        return attendeeService.saveAttendeeByBody(attendee);
    }

    @GetMapping("/list/{meetingId}")
    public ResponseEntity<List<Attendee>> listOfAttendees(@PathVariable String meetingId){
        return attendeeService.findAllByMeetingId(meetingId);
    }

    @DeleteMapping("/{id}")
    public String deleteBook(@PathVariable Long id){
        attendeeRepository.deleteById(id);
        return "Attendee with id " + id + " deleted";
    }




}
