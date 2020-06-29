import React from "react";
import Card from "./cards";
import SearchContainer from "./searchContainer";

const Accueil = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <SearchContainer/>
        </div>
        <div className="col-9">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
