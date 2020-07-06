import React from "react";
import "./App.css";
import Profile from "./components/Profile/profile"


import { BrowserRouter} from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Profile/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
