import React from "react";
import "./card.css";
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';

const Card = () => {
  return (
    <div className="card">
      <div className="card-cover">
        <img className="cover" src="https://r-cf.bstatic.com/xdata/images/hotel/square200/191581363.webp?k=2af304c61ef57dc7c17df6bab6e624afbf6971bea9448d7a36190f6d85b6d9e7&o=" />
      </div>
      <div className="card-description">
        <div className="card-description-header">
          <div className="hotel-name">Sousse Palace </div>
          <div className="hotel-rating"><Rating/></div>
        </div>

        <div className="card-hotel-descreption">
          Doté d'une plage privée et entouré de 7 hectares de jardins et de
          forêt, cet hôtel possède 2 piscines, un spa et plusieurs installations
          sportives.
        </div>
        <div className="card-hotel-button">
        <Button variant="contained" color="primary">
        More Details
        </Button>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
