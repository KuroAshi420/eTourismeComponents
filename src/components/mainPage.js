import React from "react";
import { Route, Switch } from "react-router-dom";
import Profil from "./profil";
import NavBar from "./navbar";
import ProfilBody from "./profilBody";
import Notification from "./notification"
import Tripies from "./Tripies";
import Photos from "./photos";
import Videos from "./Videos";



class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }
  componentDidMount() {
   
  }

  render() {
    return (
      <div>
        <Switch>
         
          <Route exact path="/">
            <Profil/>
            <NavBar/>
            <ProfilBody/>
          </Route>
          <Route exact path="/notification">
            <Profil/>
            <NavBar/>
            <Notification/>
          </Route>
          <Route exact path="/tripies">
            <Profil/>
            <NavBar/>
            <Tripies/>
          </Route>
          <Route exact path="/photos">
            <Profil/>
            <NavBar/>
            <Photos/>
          </Route>
          <Route exact path="/videos">
            <Profil/>
            <NavBar/>
            <Videos/>
          </Route>
          
        </Switch>
      </div>
    );
  }
}
export default MainPage;
