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
/*      User user1 = new User("Robin");
        User user2 = new User("Josefine");
        User user3 = new User("Jens");

        userRepository.save(user1);

        userRepository.save(user2);

        userRepository.save(user3);*/

      /*  Book book = new Book(userRepository.findById(1L).get(), "Detaljerna", "Ia Genberg");
        Book book2 = new Book(userRepository.findById(2L).get(), "Sockerormen", "Karin Smirnoff");

        bookRepository.save(book);
        bookRepository.save(book2);*/
/*        User user4 = new User("Jonas", "https://scontent.fbma5-1.fna.fbcdn.net/v/t1.6435-9/122189417_10221574780272913_7583628788697882602_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XAgC_nbexUgAX-ybZmW&_nc_ht=scontent.fbma5-1.fna&oh=00_AfB8mnLAxRjduAcD1gwugs6YTFV9Fm6ZwiY2AmhtgW7bDw&oe=6494354C");
        userRepository.save(user4);*/
    }



}
