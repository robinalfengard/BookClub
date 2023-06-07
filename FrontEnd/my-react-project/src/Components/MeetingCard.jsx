import React, { useState, useEffect } from "react";
import axios from "axios";

const MeetingCard = ({ meeting }) => {
  const [bookImgUrls, setBookImgUrls] = useState({});
  const [bookTitle, setBookTitle] = useState({});
  const [book, setBook] = useState({});

  useEffect(() => {
    meeting.forEach((item) => {
      const bookId = item.bookIdFromApi;
      fetchImgUrl(bookId);
      fetchBook(bookId); // Fetch book data for each item in the meeting
    });
  }, [meeting]);

  useEffect(() => {
    fetchImgUrls();
    console.log(book);
  }, []);

  const fetchImgUrl = async (bookIdFromApi) => {
    try {
      const response = await axios.get(`http://localhost:8080/book/img/${bookIdFromApi}`);
      const imgUrl = response.data;
      setBookImgUrls((prevUrls) => ({ ...prevUrls, [bookIdFromApi]: imgUrl }));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBook = async (bookIdFromApi) => {
    try {
      const response = await axios.get(`http://localhost:8080/book/id/${bookIdFromApi}`);
      const bookData = response.data;
      setBook(bookData);
      setBookTitle((prevTitles) => ({ ...prevTitles, [bookIdFromApi]: bookData.title }));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchImgUrls = () => {
    meeting.forEach(async (item) => {
      const bookId = item.bookIdFromApi;
      await fetchImgUrl(bookId);
      await fetchBook(bookId); // Pass the bookId to fetchBook
    });
  };

  return (
    <>
      {meeting.map((item) => {
        const date = item.date;
        const bookId = item.bookIdFromApi;
        let img = bookImgUrls[bookId];
        let title = bookTitle[bookId];
        console.log(title);
        const userPickerName = item.host ? item.host.name : "";
        const userPickerId = item.host ? item.host.id : "";
        img =
          img ||
          "https://media.istockphoto.com/id/628925698/sv/vektor/pile-of-hardcover-books.jpg?s=612x612&w=0&k=20&c=GDniN4t95S7ArNnUK7RAPc446x2TPQFBx9F26vJrPls=";

        return (
          <div className="meetingcard" key={userPickerId}>
            {img && <img src={img} alt="" />}
            <div className="bottom">
              <h3 className="title">Title: <br /> {title}</h3>
              <h3 className="title">Datum: {date}</h3>
              {userPickerId && <h3 className="title">Who Picked: {userPickerName}</h3>}
              <button>More info</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MeetingCard;
