import React from 'react';
import './App.css';
import Accueil from './components/accueil';
import Profil from './components/profil';
import Profil2 from './components/profil2';
import ImageContainer from './components/imagesContainer';
import Annonce from './components/annonces';

function App() {
  return (
    <div className="App">
      {/* <Accueil/> */}
      {/* <Profil/> */}
      {/* <Profil2/> */}
      {/* <ImageContainer/> */}
      <Annonce/>
    </div>
  );
}

export default App;
