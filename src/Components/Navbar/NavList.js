import React from 'react';
import { FaTwitch } from 'react-icons/fa';
import "./navbar.css";
import { PAGE_NAMES } from "../Constants.js";

const NavList = ({newRoute, currentPage }) => {
    return (
      <ul id="topnav" >
        {/* <li id="Home" className={currentPage === PAGE_NAMES.HOME ? "active " : currentPage}>
          <a href="#Home" onClick={newRoute}>bixel.dev</a>
        </li> */}
        <li id="About" className={currentPage === PAGE_NAMES.ABOUT ? "active " : currentPage}>
          <a href="#About" onClick={newRoute}>About</a>
        </li>
        <li id="Experience" className={currentPage === PAGE_NAMES.EXPERIENCE ? "active " : currentPage}>
          <a href="#Experience" onClick={newRoute}>Experience</a>
        </li>
        {/* <li id="FFXIV" className={currentPage === PAGE_NAMES.FFXIV ? "active " : currentPage}>
          <a href="#FFXIV" onClick={newRoute}>FFXIV</a>
        </li> */}
        <li id="Twitch" className={currentPage === PAGE_NAMES.TWITCH ? "active " : currentPage}>
          <a href="#Twitch" onClick={newRoute}><FaTwitch /></a>
        </li>
        {/* <IoIosMail /> Contact*/}
      </ul>
    );
}

export default NavList;