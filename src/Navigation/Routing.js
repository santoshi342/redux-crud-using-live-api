import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Component/Home";

import Login from "../Component/Login";
import Register from "../Component/Register";
import Dashboard from "../Component/Dashboard";
import Createpost from "../Component/Createpost";
import Updatepost from "../Component/Createpost";



const Routing = () => {
  let message = localStorage.getItem("Token")
  
  return (
    <div>
    
      { message ?
      
        <>
         <Routes>
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path ="/createpost" element={<Createpost/>} />
         <Route path ="/updatepost" element={<Updatepost/>} />
         </Routes>
       
        </>
        :
        <>
         <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home/>}/>

         </Routes>
         </>

     
    }
    </div>
  );

};

export default Routing;
