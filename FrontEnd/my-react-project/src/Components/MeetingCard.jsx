import React, { useState, useEffect } from "react";
import axios from "axios";
import MeetingDetailsModal from "./MeetingDetailsModal";

const MeetingCard = ({ meeting }) => {
  const [bookTitle, setBookTitle] = useState({});
  const [bookImg, setBookImg] = useState({});
  const [books, setBooks] = useState({}); 
  const [showModal, setShowModal] = useState(false);
  const [book, setBook] = useState({}); 

  useEffect(() => {
    meeting.forEach((item) => {
      const bookId = item.bookIdFromApi;
      fetchBook(bookId); // Fetch book data for each item in the meeting
    });
  }, [meeting]);



  const fetchBook = async (bookIdFromApi) => {
    try {
      const response = await axios.get(`http://localhost:8080/book/id/${bookIdFromApi}`);
      const bookData = response.data;
      setBooks((prevBooks) => ({ ...prevBooks, [bookIdFromApi]: bookData }));
      setBookTitle((prevTitles) => ({ ...prevTitles, [bookIdFromApi]: bookData.title }));
      setBookImg((prevImgs) => ({ ...prevImgs, [bookIdFromApi]: bookData.thumb }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowDetails = (bookId) => {
    setShowModal(true); // Set showModal to true to display the modal
    setBook(books[bookId]); // Set the correct book based on bookId
  };

  const handleCloseDetails = () => {
    setShowModal(false);
  };

  return (
    <>
      {meeting.map((item) => {
        const date = item.date;
        const bookId = item.bookIdFromApi;
        let img = bookImg[bookId];
        let title = bookTitle[bookId];
        const userPickerName = item.host ? item.host.name : "";
        const userPickerId = item.host ? item.host.id : "";
        img =
          img ||
          "https://media.istockphoto.com/id/628925698/sv/vektor/pile-of-hardcover-books.jpg?s=612x612&w=0&k=20&c=GDniN4t95S7ArNnUK7RAPc446x2TPQFBx9F26vJrPls=";
  
        return (
          <div className="meetingcard" key={bookId}> {/* Updated key */}
            {img && <img src={img} alt="" />}
            <div className="bottom">
              <h3 className="title">{title}</h3>
              <h3 className="title">Datum: {date}</h3>
              {userPickerId && <h3 className="title">Who Picked: {userPickerName}</h3>}
              <button
                className="meetincard-button"
                onClick={() => handleShowDetails(bookId)}
              >
                Add Notes and Details
              </button>
              {showModal && <MeetingDetailsModal book={book} show={showModal} onClose={handleCloseDetails} />}
            </div>
          </div>
        );
      })}
    </>
  );
    }
export default MeetingCard;
