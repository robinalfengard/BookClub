import React, { useState, useEffect } from "react";
import axios from "axios";

const MeetingCard = ({ meeting }) => {
  const [bookImgUrls, setBookImgUrls] = useState({});

  useEffect(() => {
    fetchImgUrls();
  }, []);

  const fetchImgUrl = async (bookId) => {
    try {
      const response = await axios.get(`http://localhost:8080/book/img/${bookId}`);
      const imgUrl = response.data;
      setBookImgUrls((prevUrls) => ({ ...prevUrls, [bookId]: imgUrl }));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchImgUrls = () => {
    meeting.forEach((item) => {
      const bookId = item.bookIdFromApi;
      fetchImgUrl(bookId);
    });
  };
  

  return (
    <>
      {meeting.map((item) => {
        const date = item.date;
        const bookId = item.bookIdFromApi;
        const img = bookImgUrls[bookId];
        const userPickerName = item.host ? item.host.name : "";
        const userPickerId = item.host ? item.host.id : "";
        
        return (
          <div className="meetingcard" key={userPickerId}>
            {img && <img src={img} alt="" />}
            <div className="bottom">
              <h3 className="title">Datum: {date}</h3>
              {userPickerId && <h3 className="title">Who Picked: {userPickerName} </h3>}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MeetingCard;
