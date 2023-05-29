import React, { useState } from "react";
import axios from "axios";

const Modal = ({ show, item, onClose }) => {
  const [book, setBook] = useState({
    userId: "",
    title: "",
    author: "",
    thumb: "",
  });

  const [showInputs, setShowInputs] = useState(false); // State variable for showing/hiding inputs
  

  const fetchData = async (userName) => {
    try {
      const response = await axios.get(`http://localhost:8080/users/${userName}`);
      const userData = response.data;
      setBook((prevBook) => ({
        ...prevBook,
        userId: userData.id,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const [successMessage, setSuccessMessage] = useState("");

  const handleClick = async (e) => {
    setSuccessMessage("Book created successfully!");
    await axios.post("http://localhost:8080/book/add", book);
    e.preventDefault();
  };

  if (!show) {
    return null;
  }

  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  let authors = item.volumeInfo.authors;
  let title = item.volumeInfo.title;
  let pages = item.volumeInfo.pageCount;

  book.title = title;
  book.author = authors;
  book.thumb = thumbnail;

  const handleCreateMeetingClick = () => {
    setShowInputs(true); // Show the inputs when the button is clicked
    fetchData("username"); // Fetch data here or update the function as needed
  };

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
              <h5>{pages} pages</h5>
              <a href={item.volumeInfo.previewLink}>
                <button>More</button>
              </a>
              <br />
              <br />
              <button className="" onClick={handleCreateMeetingClick}>
              Create Book Club Meeting With This Book?
            </button>
            </div>
     
          </div>

          <h4 className="description">{item.volumeInfo.description}</h4>
        
          {showInputs && ( // Render the inputs if showInputs is true
            <div className="hidden-inputs">
              <h5>Who will host this Book Club Meeting?</h5>
              <input title="Host" name="Host" />

              <h5>On Which Date? (xxxx-xx-xx)</h5>
              <input title="Date" name="Date" />

              <button>Save Book Club Meeting</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;