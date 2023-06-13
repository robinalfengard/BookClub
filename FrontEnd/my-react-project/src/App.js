import Main from './Pages/Main';
import './Components/style.css';
import Members from './Pages/Members';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Navbar from './Components/Navbar'; 
import Meetings from './Pages/Meetings';



function App() {
  return (
    <>
<Navbar/>
<Router>

<Routes>
<Route exact path="/findbook" element={<Main/>} />
<Route exact path="/members" element={<Members/>} />
<Route exact path="/meetings" element={<Meetings/>} />


</Routes>
</Router>
</>
  );
}

export default App;
