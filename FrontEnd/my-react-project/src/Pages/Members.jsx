import React, { useEffect, useState } from "react";
import MemberCard from "../Components/MemberCard";
import { getUsers } from "../ApiService/ApiService";
import axios from "axios";

const Members=()=>{
    const [userData, setData] = useState([]);



    useEffect(()=>{
        fetchData();
    },[]);

    useEffect(() => {
        console.log(userData); // Log the updated value of data whenever it changes
      }, [userData]);
    

    const fetchData = async () => {
        try{
            const response = await axios.get('http://localhost:8080/users/list');
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
                    <MemberCard user={userData}/>

                }
                
                
   
            </div>

    
    </>
)

}
export default Members;