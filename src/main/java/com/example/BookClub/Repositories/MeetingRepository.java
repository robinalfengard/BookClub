package com.example.BookClub.Repositories;

import com.example.BookClub.Entities.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MeetingRepository extends JpaRepository<Meeting, Long> {

    Meeting findMeetingByBookIdFromApi(String idFromApi);
}
