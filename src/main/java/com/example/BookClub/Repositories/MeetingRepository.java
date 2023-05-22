package com.example.BookClub.Repositories;

import com.example.BookClub.Entities.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MeetingRepository extends JpaRepository<Meeting, Long> {

}
