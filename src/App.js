import React, { Component } from "react";
import "./App.css";
import "./navbar.css";
import NavList from "./components/Navbar/NavList.js"

export default class App extends Component {
  PAGE_NAMES = {
    HOME: "Home",
    PROJECTS: "Projects",
    GAMES: "Games",
    BLOG: "Blog",
    ABOUT: "About"
  };

  pages = [this.PAGE_NAMES.HOME,this.PAGE_NAMES.PROJECTS,this.PAGE_NAMES.GAMES,this.PAGE_NAMES.BLOG,this.PAGE_NAMES.ABOUT];
  

  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      currentPage: this.PAGE_NAMES.PROJECTS
    };
  }

  navToggle = () => {
    this.setState({ toggle: !this.state.toggle });
    console.log("changed", this.state.toggle);
  };

  newRoute = e => {
    e.preventDefault();
    //newRoute
    let anchor = e.target.hash;
    console.log(anchor);
    this.setState({ currentPage: anchor });
  };

  render() {
  //   const PageLinks = this.pages.map((page, index) =>
  //   <li key={index}>
  //     {page}
  //   </li>
  // );
    return (
      <div className="App">
        <div className="starStuff">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <NavList pages={this.pages} activePage={this.state.currentPage} newRoute={this.newRoute} />

        <ul id="topnav" className={this.state.toggle ? "" : "hide-nav-links"}>
        <li
            id="projects"
            className={
              this.currentPage === this.PAGE_NAMES.PROJECTS ? "active " : "active"
            }
          >
            <a href="#projects" onClick={this.newRoute}>
              Projects
            </a>
          </li>
          <li className="navLink">
            <a href="#games" onClick={this.newRoute}>
              Games
            </a>
          </li>
          <li className="navLink">
            <a href="#blog" onClick={this.newRoute}>
              Blog
            </a>
          </li>
          <li className="navLink">
            <a href="#about" onClick={this.newRoute}>
              About
            </a>
          </li>
        </ul>

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
