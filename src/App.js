import React from "react";
import "./App.css";
import Accueil from "./components/accueil";
import Profil from "./components/profil";
import Profil2 from "./components/profil2";
import ImageContainer from "./components/imagesContainer";
import Annonce from "./components/annonces";
import NavBar from "./components/navbar";
import ProfilBody from "./components/profilBody";

function App() {
  return (
    <div className="App">
      {/* <ProfilBody/> */}
      {/* <Accueil/> */}
      <Profil />
      {/* <Profil2/> */}
      {/* <ImageContainer/> */}
      {/* <Annonce/> */}
    </div>
  );
}

export default App;
