import React, { useState, useEffect } from "react";
import axios from "axios";

const Modal = ({ show, item, onClose }) => {
  const [book, setBook] = useState({
    userIdForConstructor: "",
    title: "",
    author: "",
    thumb: "",
    idFromApi: ""
  });

  const [meeting, setMeeting] = useState({
    userIdForConstructor: "",
    date: "",
    bookIdFromApi: "",
  });

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/users/list`);
      const userData = response.data;
      setUsers(userData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickAddBook = async () => {
    console.log(book);
    try {
      console.log(book)
      await axios.post("http://localhost:8080/book/add", book);
      console.log("Book added successfully");
      // Do additional tasks after the book is added
    } catch (error) {
      console.log("Error adding book:", error);
      // Handle error if the book couldn't be added
    }
  };
  
  const handleClickAddMeeting = async () => {
    console.log(meeting);
    try {
      const updatedMeeting = {
        ...meeting,
        bookIdFromApi: item.id, // Set the bookIdFromApi property to item.id
      };
  
      await axios.post("http://localhost:8080/meeting/add", updatedMeeting);
      console.log("Meeting added successfully");
      // Do additional tasks after the meeting is added
    } catch (error) {
      console.log("Error adding meeting:", error);
      // Handle error if the meeting couldn't be added
    }
  };



  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  useEffect(() => {
    if (item && item.volumeInfo) {
      const { title, authors, imageLinks } = item.volumeInfo;
      setBook((prevBook) => ({
        ...prevBook,
        title,
        author: authors ? authors.join(", ") : "",
        thumb: imageLinks && imageLinks.smallThumbnail ? imageLinks.smallThumbnail : "",

      }));
    }
  }, [item]);

  
  useEffect(() => {
    if (item && item.id) {
      const { id } = item;
      setBook((prevBook) => ({
        ...prevBook,
        idFromApi: id,
      }));
    }
  }, [item]);

  useEffect(() => {
    if (item && item.id) {
      const { id } = item;
      setMeeting((prevMeeting) => ({
        ...prevMeeting,
        idFromApi: id,
      }));
    }
  }, [item]);

  useEffect(() => {
    setBook((prevBook) => ({
      ...prevBook,
      userIdForConstructor: selectedUser,
    }));
    setMeeting((prevMeeting) => ({
      ...prevMeeting,
      userIdForConstructor: selectedUser,
    }));
  }, [selectedUser]);

  if (!show || !item || !item.volumeInfo) {
    return null;
  }

  const { title, authors, pageCount, description, previewLink } = item.volumeInfo;
  const thumbnail = book.thumb;

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            Back to Books
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h2>{title}</h2>
              <h3>{authors}</h3>
              <h5>{pageCount} pages</h5>
              <a href={previewLink}>
                <button>More</button>
              </a>
              <br />
              <br />
            </div>
          </div>
          <h4 className="description">{description}</h4>
          <div className="bottom-book">
     
            <p>Who will host this Book Club Meeting?</p>
            <select name="host" id="host" onChange={handleUserChange}>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            <p>On Which Date? (xxxx-xx-xx)</p>
            <input
              title="Date"
              name="Date"
              value={meeting.date}
              onChange={(e) => setMeeting((prevMeeting) => ({ ...prevMeeting, date: e.target.value }))}
            />
                 <button className="bottom-button" onClick={handleClickAddBook}>
              Add Book
            </button>
            <button className="bottom-button" onClick={handleClickAddMeeting}>
              Create Meeting
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
