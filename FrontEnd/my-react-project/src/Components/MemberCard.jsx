import React from "react";

const MemberCard = ({ user }) => {
  return (
    <>
      {user.map((item) => {
        let id = item.id;
        let name = item.name;
        let img = item.imgUrl;
        
        return (
          <div className="membercard" key={id}>
            <img src={img} alt="" />
            <div className="bottom">
              <h3 className="title">{name}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MemberCard;
