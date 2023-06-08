import React from "react";


const Navbar=()=>{


return (
<div className="header">
<div className="row1">
    
    <h1>The Book Club</h1>
    <a href="/members">
    </a>
</div>  
<div className="row2">
 <a href="/meetings">   
<h2 className="meetings">Meetings</h2>
</a>
<a href="/findbook">
<h2 className="findbook">Create A Meeting</h2>
</a>
<a href="/members">
<h2 className="members">Members</h2>
</a>

</div>
</div>
)
}
export default Navbar