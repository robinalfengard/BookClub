import React, { useState, useEffect } from "react";
import axios from "axios";

const MeetingDetailsModal = ({ book, onClose }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  let title = book.title;
  let img = book.thumb;
  let idFromApi = book.idFromApi;
  img =
    img ||
    "https://media.istockphoto.com/id/628925698/sv/vektor/pile-of-hardcover-books.jpg?s=612x612&w=0&k=20&c=GDniN4t95S7ArNnUK7RAPc446x2TPQFBx9F26vJrPls=";

    // Setup variables 
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [meetingId, setMeetingId] = useState("");

  const [attendee, setAttendee] = useState({
    userIdForConstructor: selectedUser,
    meetingIdForConstructor: meetingId
  });
  
  // Handle fetch meetingId based on idFromApi from book
  const fetchMeetingId = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/meeting/${idFromApi}`);
      const meetingIdValue = response.data;
      setAttendee((prevAttendee) => ({
        ...prevAttendee,
        meetingIdForConstructor: meetingIdValue,
      }));
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchMeetingId();
  }, [attendee]);


// Handle fetch of users 
  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/users/list`);
      const userData = response.data;
      setUsers(userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleUserChange = (e) => {
    const selectedUserId = e.target.value;
    setSelectedUser(selectedUserId);
    setAttendee((prevAttendee) => ({
      ...prevAttendee,
      userIdForConstructor: selectedUserId,
    }));
  };

  // Handle addAttende button
  const addAttende = async (e) => {
    try {
      await axios.post(`http://localhost:8080/attendee/add`, attendee )
    } catch (error) {
      console.log(error)
      
    }
  }

  // Handle list all attendees
  

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner-add">
          <button className="close" onClick={onClose}>
            Back to Previous Meetings
          </button>
          <div className="details">
            <h5>{title}</h5>
            <img src={img} alt="" />
            <p>Attendees</p>

            <select name="attendee" id="attendee" onChange={handleUserChange}>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            <button className="details-button" onClick={addAttende}>Add</button>
          </div>
          <br />
          <button className="details-button">Save Changes</button>
        </div>
      </div>
    </>
  );
};

export default MeetingDetailsModal;
