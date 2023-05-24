import React, { useEffect, useState } from "react";
import MemberCard from "../Components/MemberCard";
import { getUsers } from "../ApiService/ApiService";
import axios from "axios";

const Members=()=>{
    const [data, setData] = useState([]);
    const [part1, setPart1] = useState([]);
    const [part2, setPart2] = useState([]);


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        try{
            const response = await axios.get('https://www.localhost:8080/users/list');
            console.log(response);
        } catch (error){
            console.log(error);
        }
    };
   


return(
    <>
    <div className="container">
    <MemberCard/>
    <MemberCard/>
    <MemberCard/>
    <MemberCard/>
    <MemberCard/>
    <MemberCard/>
    </div>

    
    </>
)

}
export default Members;