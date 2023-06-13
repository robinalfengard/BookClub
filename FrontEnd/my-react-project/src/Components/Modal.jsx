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


  const [attendee, setAttendee] = useState({
    userIdForConstructor: "",
    meetingIdForConstructor: "",
  });

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [isPresent, setIsPresent] = useState(false);
  const [meetingId, setMeetingId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [successMessageBook, setSuccessMessageBook] = useState("");

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (book.idFromApi) {
      checkIfBookIsPresent(book.idFromApi);
      console.log(book.idFromApi);
      
    }
  }, [book.idFromApi]);

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
      setSuccessMessageBook("Book Added!");
      const isPresent = await checkIfBookIsPresent(book.idFromApi);
      if (isPresent) {
        console.log(isPresent)
        console.log("Book already exists");
        // Handle the case where the book already exists
      } else {
        console.log(isPresent)
        await axios.post("http://localhost:8080/book/add", book);
        console.log("Book added successfully");
        // Do additional tasks after the book is added
      }
    } catch (error) {
      console.log("Error adding book:", error);
      // Handle error if the book couldn't be added
    }
  };

  const checkIfBookIsPresent = async (bookIdFromApi) => {
    try {
      const response = await axios.get(`http://localhost:8080/book/isPresent/${bookIdFromApi}`);
      const result = response.data;
      console.log(result);
      setIsPresent(result);
      return result; // Return true if the book exists, false otherwise
    } catch (error) {
      console.log(error);
      return false; // Return false if an error occurs while checking the book
    }
  };

  const fetchMeetingId = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/meeting/${book.idFromApi}`
      );
      const meetingIdValue = response.data;
      setMeetingId(meetingIdValue);
      setAttendee((prevAttendee) => ({
        ...prevAttendee,
        meetingIdForConstructor: meetingIdValue,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleClickAddMeeting = async () => {
    try {
      setSuccessMessage("Meeting Created!");
      const updatedMeeting = {
        ...meeting,
        bookIdFromApi: item.id, // Set the bookIdFromApi property to item.id
      };
      console.log(meeting.bookIdFromApi);
  
      // Add the meeting and wait for it to be added successfully
      await axios.post("http://localhost:8080/meeting/add", updatedMeeting);
      console.log("Meeting added successfully");
  
      // Wait for a short delay to ensure the meeting is added to the server
      await new Promise((resolve) => setTimeout(resolve, 2000));
  
      // Fetch the meeting ID after the meeting is added
      await fetchMeetingId();
  
      // Now that the meeting ID is available, post the attendee
      await axios.post("http://localhost:8080/attendee/add", attendee);
    } catch (error) {
      console.log("Error adding meeting:", error);
      // Handle error if the meeting couldn't be added
    }
  };

  const handleUserChange = (e) => {
    const selectedUserId = e.target.value;
    setSelectedUser(selectedUserId);
    setAttendee((prevAttendee) => ({
      ...prevAttendee,
      userIdForConstructor: selectedUserId,
    }));
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
        bookIdFromApi: id,
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
  let thumbnail = book.thumb;
  thumbnail =
    thumbnail ||
    "https://media.istockphoto.com/id/628925698/sv/vektor/pile-of-hardcover-books.jpg?s=612x612&w=0&k=20&c=GDniN4t95S7ArNnUK7RAPc446x2TPQFBx9F26vJrPls=";

    console.log(attendee)
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

{isPresent ? (
  <div className="bottom-book">
    <p>The book has already been read.</p>
  </div>
) : (
  <div className="bottom-book">
    <p>Who will host this Book Club Meeting?</p>
    <select name="host" id="host" onChange={handleUserChange}>
    <option value="" disabled selected>
                Choose member to add
              </option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
    <button className="bottom-button" onClick={handleClickAddBook}>
      Confirm Book
    </button>
    {successMessageBook && <p>{successMessageBook}</p>}
    <p>On Which Date? (xxxx-xx-xx)</p>
    <input
      title="Date"
      name="Date"
      value={meeting.date}
      onChange={(e) =>
        setMeeting((prevMeeting) => ({ ...prevMeeting, date: e.target.value }))
      }
    />
    <button className="bottom-button" onClick={handleClickAddMeeting}>
      Create Meeting
    </button>
    {successMessage && <p>{successMessage}</p>}
  </div>
)}

        </div>
      </div>
    </>
  );
};

export default Modal;
