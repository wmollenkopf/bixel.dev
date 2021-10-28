import React from 'react';
import "./About.css";
import photoImage from "./photo3.jpg"
import { IoIosMail, IoLogoGithub, IoLogoTwitter } from 'react-icons/io';
import { FaTwitch } from 'react-icons/fa';
import { PAGE_NAMES } from "../Constants.js";

const About = ({ newRoute }) => {
    return (
        <div id="backgroundContainer">
            <div id="aboutContainer">
                <div id="photoContainer">
                    <img id="profilePhoto" alt="Photograph of Self" src={photoImage}  />
                </div>
                <div id="bioContainer">
                    <h2>About Me</h2>
                    <p>I'm a hard-working IT Professional, formally a Programmer (Web Developer) and currently a Systems Administrator with many years of experience working on various websites and applications.</p>
                    
                    <h2>Hobbies</h2>
                    <p>My hobbies include playing video games, learning a foreign language, dabbling in game development, traveling around the world (Pre-COVID) with my wife and reading fictional and educational books.</p>
                    
                    <h2>Studying</h2>
                    <p>I also love studying and improving myself each day, as well as to improve my skills through practice and online courses.</p>
                    <p>Lately I've been studying: Japanese, Data Science (Python, etc), Laravel, ReactJS, Bootstrap </p>
                </div>
                <div id="contactContainer">
                    <button><IoIosMail /></button>
                    <button><IoLogoGithub /></button>
                    <button><IoLogoTwitter /></button>
                    <button onClick={() => newRoute(PAGE_NAMES.TWITCH)}><FaTwitch /></button>
                </div>
            </div>

        </div>
    );
}

export default About;