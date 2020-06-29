import React from "react";
import "./imagesContainer.css";


const ImageContainer = () => {
  return (
    <div className="container-global">
      
        <div className="container-image">
              <img src="https://www.tunisienumerique.com/wp-content/uploads/2020/03/panoramica-sidi-bou-said-1000x600.jpg" className="container-picture"/>
        </div>
        <div className="container-image">
        <img src="https://www.voyage-tunisie.info/wp-content/uploads/2018/12/mus%C3%A9-bardo-..jpg" className="container-picture"/>
        </div>
        <div className="container-image">
        <img src="https://www.vacancesweb.be/static/medium/madhia.jpg" className="container-picture"/>
        </div>
      
     </div>
  );
};

export default ImageContainer;
