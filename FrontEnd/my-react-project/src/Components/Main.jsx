import React, { useState } from "react";
import Card from "./Card";
import axios from "axios"; 
import members from "../Pages/Members"; 

const Main=()=>{
    const[search, setSearch]=useState("");
    const [bookData, setData]=useState([]);
    const searchBook=(event)=>{
        if(event.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCsr8JfGWq9Mf6icTSgS9muSEzJKCPaSUQ'+'&maxResults=12')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }

    return(
        <>

            <div className="search">
                    <input type="text" placeholder="Book Name"
                    value={search} onChange={e=>setSearch(e.target.value)}
                    onKeyDown={searchBook}
                    />
                   
                    <button>Search for Books</button>
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