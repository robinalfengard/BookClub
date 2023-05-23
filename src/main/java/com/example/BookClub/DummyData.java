package com.example.BookClub;

import com.example.BookClub.Entities.Book;
import com.example.BookClub.Entities.User;
import com.example.BookClub.Repositories.BookRepository;
import com.example.BookClub.Repositories.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class DummyData {

    @Autowired
    UserRepository userRepository;

    @Autowired
    BookRepository bookRepository;
    @PostConstruct
    public void populateTestData(){
/*        User user1 = new User("Robin");
        User user2 = new User("Josefine");
        User user3 = new User("Jens");

        userRepository.save(user1);

        userRepository.save(user2);

        userRepository.save(user3);*/

      /*  Book book = new Book(userRepository.findById(1L).get(), "Detaljerna", "Ia Genberg");
        Book book2 = new Book(userRepository.findById(2L).get(), "Sockerormen", "Karin Smirnoff");

        bookRepository.save(book);
        bookRepository.save(book2);*/

    }



}
