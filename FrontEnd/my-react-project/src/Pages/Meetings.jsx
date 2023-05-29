import React from "react";
import MeetingCard from "../Components/MeetingCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Meetings = () =>{
    const [userData, setData] = useState([]);


    useEffect(()=>{
        fetchData();
    },[]);

    useEffect(() => {
        console.log(userData); // Log the updated value of data whenever it changes
      }, [userData]);
    

    const fetchData = async () => {
        try{
            const response = await axios.get('http://localhost:8080/meeting/list');
            console.log(response.data);
            const responseData = response.data;
            setData(responseData);
        } catch (error){
            console.log(error);
        }
    };
   

    return(
        <>
        <div className="container">
        {
                    <MeetingCard meeting={userData}/>

                }
            </div>
        </>

    )

} 
export default Meetings;