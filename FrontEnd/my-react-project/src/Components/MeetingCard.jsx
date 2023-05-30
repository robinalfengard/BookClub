import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const MeetingCard = ({ meeting }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userId = meeting.map((item) => item.book.user.id);
      const response = await axios.get(`http://localhost:8080/users/${userId}`);
      const userData = response.data;
      setUser(userData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {meeting.map((item) => {
        const date = item.date;
        const img = item.book.thumb;
        const userPickerId = item.book.user.id;
        
        

        return (
          <div className="meetingcard" key={userPickerId}>
            <img src={img} alt="" />
            <div className="bottom">
              <h3 className="title">Datum: {date}</h3>
              {user.name && <h3 className="title">Who Picked: {user.name} </h3>}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MeetingCard;
