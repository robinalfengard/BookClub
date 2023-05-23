import React from "react";
import { useState } from "react";


const Modal=({show, item, onClose})=>{
    
    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let authors=item.volumeInfo.authors;
    let title=item.volumeInfo.title;
    let pages=item.volumeInfo.pageCount;

        return(
            
        <>
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close" onClick={onClose}>
                    Back to Books
                </button>
                <div className="inner-box">
                    <img src={thumbnail} alt=""/>
                    <div className="info">
                        <h2>{title}</h2>
                        <h3>{authors}</h3>
                        <h5>{pages} pages</h5>
                        <a href={item.volumeInfo.previewLink}><button>More</button></a>
                    </div>
                </div>
            <h4 className="description">
                {item.volumeInfo.description}
            </h4>
            </div>
        </div>
        </>
    )
}
export default Modal