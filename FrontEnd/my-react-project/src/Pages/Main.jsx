import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import axios from "axios"; 


const Main=()=>{
    const[search, setSearch]=useState("");
    const [bookData, setData]=useState([]);    
 

    const searchBook=(event)=>{
        if(event.key==="Enter")
        {   
            //INSERT google api key where #GoogleKey is printed below
            axios.get()
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
            //INSERT google api key where #GoogleKey is printed below
    const handleClick = async () => {
        axios.get()
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
      };

    return(
        <>
            <div className="search">
                    <input type="text" placeholder="Book Name"
                    value={search} onChange={e=>setSearch(e.target.value)}
                    onKeyDown={searchBook}
                    />
                   
                    <button className="" onClick={handleClick}>Search for Books</button>
                </div>
            <div className="container">
                {
                    <Card book={bookData}/>
                }
                
            </div>

        </>
    )
}
export default Main;
