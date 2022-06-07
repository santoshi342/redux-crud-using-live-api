import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Component/Home";

import Login from "../Component/Login";
import Register from "../Component/Register";
import Dashboard from "../Component/Dashboard";
import Createpost from "../Component/Createpost";
import Updatepost from "../Component/Createpost";
import Forgotpassword from '../Component/Forgotpassword';
import Resetpassword from '../Component/Resetpassword';
import Product from'../Component/Product';




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
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/Product" element ={<Product/>} />

         </Routes>
         </>

     
    }
    </div>
  );

};

export default Routing;
