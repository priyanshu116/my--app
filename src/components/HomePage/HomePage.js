import React from "react";
import "./HomePage.css";
import githubIcon from "../../images/githubIcon.png";
import linkedinIcon from "../../images/linkedinIcon.png";
import youtube from "../../images/youtube.png";

function Homepage() {
  return (
    <div className="homepage_container">
      <div className="homepage_left">
        <p className="homepage_left_h1">
          <span className="red_color">Hi,</span> my name is
        </p>
        <p className="homepage_left_h2">PRIYANSHU</p>
        <p className="homepage_left_h3">
          currently learning <span className="red_color">full stack development</span>{" "}
        </p>
        <p className="homepage_left_description">
          Hi,i am a 3 year under graduate student of computer science
          fasinated by the tech world basically by the web.
          this is my first ever react project and i am eager to learn more. i am also working to improve my skills on DSA and other languages 
          but this is what i like the most .
          i am also a <span className = "green_color">3 star coder of java </span> at hackerrank.{" "}
        </p>
        <div>
          <a href="https://github.com/priyanshu116" target="_blank">

            <img src={githubIcon} alt="githubIconimage" 
            className ="homepage_logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/priyanshu-khangrawat-aa230b210/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="linkedinIconimage"
            className="homepage_logo" />
          </a>
          <a href="https://www.youtube.com/channel/UCU_2vmlIqXBIVH_AynfwJEA" target="_blank">

            <img src={youtube} alt="youtubeimage" 
            className ="homepage_logo" />
          </a>
        </div>
        <a href="mailto:priyanshukhangrawat111@gmail.com">
          <button className="homepage_left_button">Get in Touch</button>
        </a>
      </div>
      <div className="homepage_right">
        <img
          src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif"
          alt="GIF"
        />
      </div>
    </div>
  );
}

export default Homepage;