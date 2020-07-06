import React from "react";
import "./profil.css";
import { Carousel } from "react-bootstrap";

const Entete2 = () => {
  return (
    <div className="profil">
      <div className="profil-cover">
      <Carousel>
  
  <Carousel.Item>
      <div className="carousel-gallery"> 
         <div className="carousel-gallery-pic">
         <img
      className="d-block w-100"
      src='https://image.resabooking.com/images/hotel/TCL_Hotel_Royal_Kenz_Thalasso_&_Spa_13.jpg'
      alt="first slide"
      style ={{
        height: '400px'
      }}
    />
         </div>
         <div className="carousel-gallery-pic">
         <img
      className="d-block w-100"
      src="https://lh3.googleusercontent.com/proxy/SADdyDS6rWhJnO1m6-kKTZHmlawfQRMJ1Jj2Wr9kB_ouYFpxpfrRmgOEnqd7sM60Dezbq8gIV2gCnqokXOYP1e-W0-ayUAOxAQ9wxd0-inGvrZL6IrqIxi41nqY9eApW9Ux0oA"
      alt="seconde slide"
      style ={{
        height: '400px'
      }}
    />
         </div>
         <div className="carousel-gallery-pic">
         <img
      className="d-block w-100"
      src='https://lh3.googleusercontent.com/proxy/fKi49Vnk_JGl9ZieeCZQWnQYH02rk1IJkOb6WfSJnayR0TjdHCqzznGiKTRO3xkWL6qZNmT14L8x115Kc8nU03yQfP0z4gRUkk6QWr0m8b4iUb5HCw'
      alt="first slide"
      style ={{
        height: '400px'
      }}
    />
         </div>
         <div className="carousel-gallery-pic">
         <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRh2Sj5sDAU06Vh-TQu0XE5cTNgpfDnFUHEA&usqp=CAU"
      alt="seconde slide"
      style ={{
        height: '400px'
      }}
    />
         </div>
      </div>
    
  </Carousel.Item>
  <Carousel.Item>
      <div className="carousel-gallery"> 
         <div className="carousel-gallery-pic">
         <img
      className="d-block w-100"
      src='https://image.resabooking.com/images/hotel/TCL_Hotel_Royal_Kenz_Thalasso_&_Spa_13.jpg'
      alt="first slide"
      style ={{
        height: '400px'
      }}
    />
         </div>
         <div className="carousel-gallery-pic">
         <img
      className="d-block w-100"
      src="https://lh3.googleusercontent.com/proxy/SADdyDS6rWhJnO1m6-kKTZHmlawfQRMJ1Jj2Wr9kB_ouYFpxpfrRmgOEnqd7sM60Dezbq8gIV2gCnqokXOYP1e-W0-ayUAOxAQ9wxd0-inGvrZL6IrqIxi41nqY9eApW9Ux0oA"
      alt="seconde slide"
      style ={{
        height: '400px'
      }}
    />
         </div>
         <div className="carousel-gallery-pic">
         <img
      className="d-block w-100"
      src='https://lh3.googleusercontent.com/proxy/fKi49Vnk_JGl9ZieeCZQWnQYH02rk1IJkOb6WfSJnayR0TjdHCqzznGiKTRO3xkWL6qZNmT14L8x115Kc8nU03yQfP0z4gRUkk6QWr0m8b4iUb5HCw'
      alt="first slide"
      style ={{
        height: '400px'
      }}
    />
         </div>
         <div className="carousel-gallery-pic">
         <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRh2Sj5sDAU06Vh-TQu0XE5cTNgpfDnFUHEA&usqp=CAU"
      alt="seconde slide"
      style ={{
        height: '400px'
      }}
    />
         </div>
      </div>
    
  </Carousel.Item>
</Carousel>
      </div>
      <div className="profil-picture">
        <img
          className="profil-pictuce-img"
          src="https://i.pinimg.com/564x/ac/0d/4a/ac0d4a70f1b83aa51926bd086ea1332e.jpg"
        />
      </div>
      <span className="profil-user-name">User Name</span>
    </div>
  );
};

export default Entete2;
