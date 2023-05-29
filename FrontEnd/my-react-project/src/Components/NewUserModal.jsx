import React from "react";
import { useState } from "react";
import axios from "axios";

const NewUserModal = ({ show, item, onClose }) => {
  const [user, setUser] = useState({
    name: "",
    imgUrl: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    setSuccessMessage("User created successfully!");
    await axios.post("http://localhost:8080/users/add", user);
    e.preventDefault();
  };

  if (!show) {
    return null;
  }

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner-add">
          <button className="close" onClick={onClose}>
            Back to Members
          </button>
          <div className="inner-box-add">
            <input
              type="text"
              placeholder="Name"
              value={user.name}
              onChange={onInputChange}
              name="name"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={user.imgUrl}
              onChange={onInputChange}
              name="imgUrl"
            />
            <button onClick={handleClick}>Add</button>
            {successMessage && <p>{successMessage}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewUserModal;
