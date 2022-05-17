import React from "react";
import { Link } from "react-router-dom";


const Home = () =>{

    return(
        <div><br />
            <center>
            <h4>Crud Using API</h4>
            <Link to="/register">Register</Link>{"  "}
            <Link to="/login">Login</Link>
            </center>
        </div>
    )
}

export default Home;