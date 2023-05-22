package com.example.BookClub.Repositories;

import com.example.BookClub.Entities.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingRepository extends JpaRepository<Rating, Long> {

}
