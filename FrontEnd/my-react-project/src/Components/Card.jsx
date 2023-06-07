import React from "react";
import Modal from "./Modal";
import { useState } from "react";


const Card=({book})=>{
    const[show, setShow]=useState(false);
    const[bookItem, setItem]=useState();
    console.log(book);


    return(
        <>
        {
            book.map((item)=>{
                let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let authors=item.volumeInfo.authors;
                let title=item.volumeInfo.title;
                thumbnail = thumbnail || "https://media.istockphoto.com/id/628925698/sv/vektor/pile-of-hardcover-books.jpg?s=612x612&w=0&k=20&c=GDniN4t95S7ArNnUK7RAPc446x2TPQFBx9F26vJrPls=";

                 {
                    return(
                        <>
                        <div className="card" onClick={()=>{setShow(true); setItem(item)}}>
                        <img src={thumbnail} alt="" />
                            <div className="bottom">
                                
                                <h3 className="title">{title}</h3>
                                
                                <p className="author">Author <br />{authors}</p>
                            </div>
                
                        </div>
                        <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                        </>
                    )

                }
     


            })
        }


        </>
    )
}
export default Card;