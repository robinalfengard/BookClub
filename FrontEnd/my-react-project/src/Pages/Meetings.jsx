import React, { useState, useEffect } from "react";
import MeetingCard from "../Components/MeetingCard";
import axios from "axios";

const Meetings = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    console.log("Component rendered");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/meeting/list");
      const responseData = response.data;
      setUserData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        {userData.length > 0 && <MeetingCard meeting={userData} />}
      </div>
    </>
  );
};

export default Meetings;
