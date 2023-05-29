import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const MeetingCard = ({ meeting }) => {
    const [user, setUser] = useState({});
  
    const fetchData = async (userPickerId) => {
      try {
        const response = await axios.get(`http://localhost:8080/users/${userPickerId}`);
        const userData = response.data;
        setUser(userData);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <>
        {meeting.map((item) => {
          let date = item.date;
          let img = item.book.thumb;
          let userPickerId = item.book.user.id;
          fetchData(userPickerId);
  
          return (
            <>
              <div className="meetingcard">
                <img src={img} alt="" />
                <div className="bottom">
                  <h3 className="title">Datum: {date}</h3>
                  {user.name && <h3 className="title">Who Picked: {user.name} </h3>}
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  
  export default MeetingCard;
  