package com.example.BookClub.Repositories;

import com.example.BookClub.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

@Repository
@CrossOrigin(origins = "http://localhost:3000")
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByName(String name);
}
