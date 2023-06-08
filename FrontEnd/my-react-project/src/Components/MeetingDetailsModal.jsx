import React from "react";
import { useState, useEffect} from "react";
import axios from "axios";

const MeetingDetailsModal = ({ book, onClose }) => {
    const[show, setShow]=useState(false);
    const[bookItem, setItem]=useState();
    console.log(book.title);
    let title = book.title
    let img = book.thumb
    img = img ||"https://media.istockphoto.com/id/628925698/sv/vektor/pile-of-hardcover-books.jpg?s=612x612&w=0&k=20&c=GDniN4t95S7ArNnUK7RAPc446x2TPQFBx9F26vJrPls=";

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");

    const [attendee, setAttendee] = useState({
        userIdForConstructor: useState(""),
        meetingIdForConstructor : useState("")
      });

    useEffect(() => {
        fetchUserData();
      }, []);

      const handleUserChange = (e) => {
        setSelectedUser(e.target.value);
      };
    
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/users/list`);
          const userData = response.data;
          setUsers(userData);
        } catch (error) {
          console.log(error);
        }
      };


    return(
        <>
        <div className="overlay">
        <div className="overlay-inner-add">
          <button className="close" onClick={onClose}>
            Back to Previous Meetings
          </button>
        <div className="details">
        <h5>{title}</h5>
        <img src={img} alt="" />
        <p>Attendees</p>
        
        <select name="attendee" id="attendee" onChange={handleUserChange}>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            <button className="details-add">Add</button>
        </div>
<br />
<button className="details-button">Save Changes</button>
        </div>
      </div>
        </>
    )
}
export default MeetingDetailsModal; 