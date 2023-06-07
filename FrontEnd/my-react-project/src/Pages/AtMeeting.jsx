import React, { useState, useEffect } from "react";
import axios from "axios";

const AtMeeting = () => {
  const [meetings, setMeetings] = useState([]);
  const [book, setBook] = useState({});
  const [selectedMeeting, setSelectedMeeting] = useState("");

  const fetchMeetingBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/meeting/list");
      const listOfMeetings = response.data;
      setMeetings(listOfMeetings);
    } catch (error) {
      setError(error);
    }
  };

  const fetchBook = async (bookIdFromApi) => {
    try {
      const response = await axios.get(`http://localhost:8080/book/id/${bookIdFromApi}`);
      const bookData = response.data;
      setBook(bookData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMeetingBooks();
  }, []);

  useEffect(() => {
    if (meetings.length > 0) {
      const firstMeeting = meetings[0];
      if (firstMeeting.bookIdFromApi) {
        fetchBook(firstMeeting.bookIdFromApi);
      }
    }
  }, [meetings]);

  useEffect(() => {
    console.log(meetings);
    console.log(book);
  }, [meetings, book]);

  const handleMeetingChange = (e) => {
    setSelectedMeeting(e.target.value);
  };

  return (
    <div className="discussion">
      <h3>Select Meeting to begin the discussion</h3>
      <select value={selectedMeeting} onChange={handleMeetingChange}>
        {meetings.map((meeting) => (
          <option key={meeting.id} value={meeting.id}>
            {meeting.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AtMeeting;
