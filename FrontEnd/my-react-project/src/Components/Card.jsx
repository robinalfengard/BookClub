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
                if(thumbnail!= undefined)
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