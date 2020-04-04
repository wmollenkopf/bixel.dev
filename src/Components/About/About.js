import React from 'react';
import "./About.css";
import photoImage from "./photo.jpg"
import { IoIosMail, IoLogoGithub, IoLogoTwitter } from 'react-icons/io';
import { FaTwitch } from 'react-icons/fa';
import { PAGE_NAMES } from "../Constants.js";

const About = ({ newRoute }) => {
    return (
        <div id="backgroundContainer">
            <div id="aboutContainer">
                <div id="photoContainer">
                    <img id="profilePhoto" alt="Photograph of Self" src={photoImage} />
                </div>
                <div id="bioContainer">
                    <h2>About Me</h2>
                    <p>I consider myself a very hard-working Developer and Systems Administrator with many years of experience working on various websites and applications.</p>
                    <p>I love studying and improving myself each day, as well as to improve my skills through practice and online courses.</p>

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