import React, { Component } from "react";
import "./App.css";
import NavList from "./Components/Navbar/NavList"
import { PAGE_NAMES } from "./Components/Constants.js";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      currentPage: PAGE_NAMES.HOME
    };

  }

  render() {
    const newRoute = (e) => {
      e.preventDefault();
      //newRoute 
      let destination = e.target.getAttribute('href').slice(1);
      console.log(destination);
      this.setState({ currentPage: destination });
      if (destination === PAGE_NAMES.TWITCH) {
        window.location = "https://www.twitch.tv/BiriBixel";
      } else {
        console.log("Not traveling:", destination)
      }
    };
    return (
      <div className="App">
        <div className="starStuff">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <NavList newRoute={newRoute} currentPage={this.state.currentPage}  />
        <div id="title">
          <span id="mainTitle">bixel.dev</span>
          <hr />
          <span id="subTitle">
            <div>To Be Continued</div>
          </span>
        </div>
      </div>
    );
  } // render
}
