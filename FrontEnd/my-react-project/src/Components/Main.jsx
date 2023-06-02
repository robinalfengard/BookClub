import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios"; 


const Main=()=>{
    const[search, setSearch]=useState("");
    const [bookData, setData]=useState([]);

      const handleClick = async () => {
        try {
            await axios.post()
            
        } catch (error) {
            console.log(error)
            
        }
      }
    
 

    const searchBook=(event)=>{
        if(event.key==="Enter")
        {   
            //INSERT google api key where #GoogleKey is printed below
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=#GoogleKey'+'&maxResults=12')
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
