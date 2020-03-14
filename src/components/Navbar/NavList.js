import React, { Component } from 'react';
import { FaTwitch } from 'react-icons/fa';
import "./navbar.css";


export default class NavList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      currentPage: this.PAGE_NAMES.HOME
    };
  }

  PAGE_NAMES = {
    HOME: "Home",
    GAMES: "Games",
    FFXIV: "FFXIV",
    TWITCH: "Twitch"
  };

  newRoute = e => {
    //e.preventDefault();
    //newRoute 
    let destination = (e.target.hash).slice(1);
    console.log(destination);
    this.setState({ currentPage: destination });
    if (destination === this.PAGE_NAMES.TWITCH) {
      window.location = "https://www.twitch.tv/BiriBixel";
    } else {
      console.log("Not traveling:", destination)
    }
  };

  // const pages = [this.PAGE_NAMES.HOME, this.PAGE_NAMES.PROJECTS, this.PAGE_NAMES.GAMES, this.PAGE_NAMES.BLOG, this.PAGE_NAMES.ABOUT];
  render() {
    let newRoute = this.newRoute;
    return (
      <ul id="topnav" >
        <li id="Home" className={this.state.currentPage === this.PAGE_NAMES.HOME ? "active " : this.state.currentPage}>
          <a href="#Home" onClick={newRoute}>Home</a>
        </li>
        <li id="Games" className={this.state.currentPage === this.PAGE_NAMES.GAMES ? "active " : this.state.currentPage}>
          <a href="#Games" onClick={newRoute}>Games</a>
        </li>
        <li id="FFXIV" className={this.state.currentPage === this.PAGE_NAMES.FFXIV ? "active " : this.state.currentPage}>
          <a href="#FFXIV" onClick={newRoute}>FFXIV</a>
        </li>
        <li id="Twitch" className={this.state.currentPage === this.PAGE_NAMES.TWITCH ? "active " : this.state.currentPage}>
          <a href="#Twitch" onClick={newRoute}><FaTwitch /> Twitch</a>
        </li>
      </ul>
    );
  }
}
