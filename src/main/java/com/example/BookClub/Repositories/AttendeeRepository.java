package com.example.BookClub.Repositories;

import com.example.BookClub.Entities.Attendee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttendeeRepository extends JpaRepository<Attendee, Long> {

}
