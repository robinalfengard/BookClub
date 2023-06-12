package com.example.BookClub.Repositories;

import com.example.BookClub.Entities.Attendee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AttendeeRepository extends JpaRepository<Attendee, Long> {

    List<Attendee> findAllByMeetingId(Long meetingIdLong);
}
