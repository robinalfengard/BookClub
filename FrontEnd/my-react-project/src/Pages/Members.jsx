import React, { useEffect, useState } from "react";
import MemberCard from "../Components/MemberCard";
import axios from "axios";
import NewUserModal from "../Components/NewUserModal";

const Members=()=>{
    const [userData, setData] = useState([]);
    const [showModal, setShowModal] = useState(false); 


    useEffect(()=>{
        fetchData();
    },[]);

    useEffect(() => {
      }, [userData]);
    

    const fetchData = async () => {
        try{
            const response = await axios.get('http://localhost:8080/users/list');
            
            const responseData = response.data;
            setData(responseData);
        } catch (error){
            console.log(error);
        }
    };
   
    const handleAddMember = () => {
        setShowModal(true); // Set showModal to true to display the modal
      };

      const handleCloseModal = () => {
        setShowModal(false);
      };

return(
    <>                      
    
<div className="container-members">
                {
                    <MemberCard user={userData}/>

                }
 
</div>
<div className="addmember">
    <button onClick={handleAddMember}>Add Member</button>
    {showModal && <NewUserModal show={showModal} onClose={handleCloseModal} />}
            
</div>

    
    </>
)

}
export default Members;