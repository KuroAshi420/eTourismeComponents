import React from "react";
import { Route, Switch } from "react-router-dom";
import Entete from "../entete";
import NavBar from "../navbar";
import ProfilBody from "../profilBody";
import Notification from "../notification";
import Tripies from "../Tripies";
import Photos from "../photos";
import Videos from "../Videos";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <Entete />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ProfilBody />
          </Route>
          <Route exact path="/notification">
            <Notification />
          </Route>
          <Route exact path="/tripies">
            <Tripies />
          </Route>
          <Route exact path="/photos">
            <Photos />
          </Route>
          <Route exact path="/videos">
            <Videos />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default Profile;
