import React, { Component } from "react";
import "./App.css";
import NavList from "./Components/Navbar/NavList"

export default class App extends Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (
      <div className="App">
        <div className="starStuff">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <NavList newRoute={this.newRoute}  />
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
