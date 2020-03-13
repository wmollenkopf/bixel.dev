import React, { Component } from "react";
import "./App.css";
import "./navbar.css";
import { FaAlignRight } from "react-icons/fa";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };
  }

  navToggle = () => {
    this.setState({ toggle: !this.state.toggle });
    console.log("changed", this.state.toggle);
  };

  render() {
    return (
      <div className="App">
        <ul id="topnav" className={this.state.toggle ? "" : "hide-nav-links"}>
          <li className="navLink">
            <a className="active" href="#projects">
              Projects
            </a>
          </li>
          <li className="navLink">
            <a href="#games">Games</a>
          </li>
          <li className="navLink">
            <a href="#blog">Blog</a>
          </li>
          <li>
            <div className="navBarToggler">
              <button id="" onClick={this.navToggle}>
                <FaAlignRight />
              </button>
            </div>
          </li>
        </ul>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title">
          <span id="mainTitle">bixel.dev</span>
          <hr />
          <span id="subTitle">
            <div>Projects</div>
            <div>Games</div>
            <div>Blog</div>
            <div>About</div>
          </span>
        </div>
      </div>
    );
  } // render
}
