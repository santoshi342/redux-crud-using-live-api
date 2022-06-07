import React from "react";
import { Link } from "react-router-dom";
import slider1 from "../Image/slider1.jpg";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div>
          <Link to="/register" className="menu-text">
            Register
          </Link>
          {"  "}
          <Link to="/login" className="menu-text">
            Login
          </Link>
          <Link to="product" className="menu-text">
            Product
          </Link>
          <spam id="navmob" className="menu-text">
            +91-9165787278
          </spam>
          <spam id="navemail" className="menu-text">
            santoshiyuvasoft342@gmail.com
          </spam>
        </div>
      </nav>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="data:image/jpeg;base64,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"
            alt="First slide"
            height="480px"
            width="300px"
          />
          <Carousel.Caption>
            <h3>Yuvasoft Solutions</h3>
            <p>WE BUILD PRODUCTS FOR NEXT GENERATION.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSKFAa0lm36YW4UKNIvpwHjd9dG8ZB9LUlY1bKitVBmP12ts9fqBjVWfIuOnz0HpOm1Hg&usqp=CAU"
            alt="Second slide"
            height="480px"
            width="300px"
          />

          <Carousel.Caption>
            <h3>Yuvasoft Solutions</h3>
            <p>WE BUILD PRODUCTS FOR NEXT GENERATION .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/1150407.jpg"
            alt="Third slide"
            height="480px"
            width="300px"
          />
          <Carousel.Caption>
            <h3>Yuvasoft Solutions</h3>
            <p>WE BUILD PRODUCTS FOR NEXT GENERATION </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
      <h4 style={{paddingTop:"40px"}}><center>ABOUT US </center></h4>
      <p style={{padding:"25px 60px"}}><center>Yuvasoft Solutions Pvt Ltd is a global, software development company,
         dedicated to building innovative app solutions for Mobile and Web. 
         We are a In-house team that cares deeply about creating great apps for our customers. 
         Yuvasoft Solutions Pvt Ltd was established in January 2011 as a Web Project and
          Programme Development Company however due to the changing built environment and the
           growing needs of our Clients; it became necessary to broaden the services that could 
           be provided by Yuvasoft, so as to offer multi-disciplinary under one banner, 
           we now provide services in Project Management & Analysis, Project Architecture, 
           Mobile Apps Development, Designs, Quality Assurance. Yuvasoft has continued to strive 
        </center></p> 
          </div>
          <div>
            <p style={{fontSize:"15px"}} className="footer"><center>© 2017 YuvaSoft Solutions PVT. LTD.    |    All Rights Reserved </center></p>
          </div> 
    </div>
  );
};

export default Home;
