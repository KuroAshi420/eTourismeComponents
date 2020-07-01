import React from "react";
import "./App.css";



import { BrowserRouter} from "react-router-dom";
import Accueil from "./components/accueil";
import Profil from "./components/profil";
import Profil2 from "./components/profil2";
import ImageContainer from "./components/imagesContainer";
import Annonce from "./components/annonces";
import NavBar from "./components/navbar";
import ProfilBody from "./components/profilBody";
import MainPage from "./components/mainPage";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      {/* <ProfilBody/> */}
      {/* <Accueil/> */}
      {/* <Profil /> */}
      {/* <Profil2/> */}
      <MainPage/>
      {/* <ImageContainer/> */}
      {/* <Annonce/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
