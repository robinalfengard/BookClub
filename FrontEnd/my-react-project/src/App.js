import Main from './Components/Main';
import './Components/style.css';
import Members from './Pages/Members';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Navbar from './Components/Navbar'; 

function App() {
  return (
    <>
<Navbar/>
<Router>

<Routes>
<Route exact path="/findbook" element={<Main/>} />
<Route exact path="/members" element={<Members/>} />
<Route exact path="/meetings" element={<Members/>} />
</Routes>
</Router>
</>
  );
}

export default App;
