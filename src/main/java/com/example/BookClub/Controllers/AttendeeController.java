package com.example.BookClub.Controllers;

import com.example.BookClub.Entities.Attendee;
import com.example.BookClub.Services.AttendeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/attendee")
public class AttendeeController {
    @Autowired
    AttendeeService attendeeService;

    @PostMapping("/add")
    public ResponseEntity<String> addAttendee(@RequestBody Attendee attendee){
        return attendeeService.saveAttendeeByBody(attendee);
    }




}
