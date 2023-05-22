package com.example.BookClub.Repositories;

import com.example.BookClub.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
