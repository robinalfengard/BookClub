import React, { useState, useEffect } from "react";
import axios from "axios";



const Ratings=()=>{
    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchBooks();
        fetchUsers();
      }, []);

      useEffect(() => {
        console.log(books);
      }, [books]);
    
      useEffect(() => {
        console.log(users);
      }, [users]);


    const fetchBooks = async () =>{
        try {
            const response = await axios.get(`http://localhost:8080/book/all`)
            const bookList = response.data;
            setBooks(bookList)
        } catch (error) {
            
        }
    }

        const fetchUsers = async () =>{
            try {
                const response = await axios.get(`http://localhost:8080/users/list`)
                const userList = response.data;
                setUsers(userList)
            } catch (error) {
                
            }
    }

    return(
    <>
    </>
    )
}
export default Ratings;
