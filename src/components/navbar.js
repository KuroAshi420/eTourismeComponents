import React from "react";
import "./navbar.css";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import ChatIcon from "@material-ui/icons/Chat";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <a className="navbar-link" href="/">
          Journal
        </a>
        <a className="navbar-link" href="/notification">
          Notification
        </a>
        <a className="navbar-link" href="/tripies">
          Tripies
        </a>
        <a className="navbar-link" href="/photos">
          Photos
        </a>
        <a className="navbar-link" href="/videos">
          Videos
        </a>
      </div>
      <div className="navbar-right">
        <button className="navbar-btn">
          <ChatIcon color="primary" style={{ fontSize: 40 }} />{" "}
        </button>
        <button className="navbar-btn">
          <SearchSharpIcon color="primary" style={{ fontSize: 40 }} />
        </button>
        <button className="navbar-btn">...</button>
      </div>
    </div>
  );
};

export default NavBar;
