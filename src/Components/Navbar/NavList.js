import React from 'react';
import { FaTwitch } from 'react-icons/fa';
import "./navbar.css";
import { PAGE_NAMES } from "../Constants.js";

const NavList = ({newRoute, currentPage }) => {
    return (
      <ul id="topnav" >
        <li id="Home" className={currentPage === PAGE_NAMES.HOME ? "active " : currentPage}>
          <a href="#Home" onClick={newRoute}>Home</a>
        </li>
        <li id="Games" className={currentPage === PAGE_NAMES.GAMES ? "active " : currentPage}>
          <a href="#Games" onClick={newRoute}>Games</a>
        </li>
        <li id="FFXIV" className={currentPage === PAGE_NAMES.FFXIV ? "active " : currentPage}>
          <a href="#FFXIV" onClick={newRoute}>FFXIV</a>
        </li>
        <li id="Twitch" className={currentPage === PAGE_NAMES.TWITCH ? "active " : currentPage}>
          <a href="#Twitch" onClick={newRoute}><FaTwitch /> Twitch</a>
        </li>
      </ul>
    );
}

export default NavList;