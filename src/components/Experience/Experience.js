import React from "react";
import "./Experience.css";
import html from "../../images/html.svg";
import react from "../../images/react.svg";
import js from "../../images/js.png";
import firebase from "../../images/firebase.png";
import ExperienceCard from "./ExperienceCard/ExperienceCard";


export default function Experience() {
    const statements = [
        "1. i am a pretty great SDE",
        "2. i have worked on several projects there alone as team leader",
        "3. i have cerated and maintained many function for the company ",
        "4. as i was alone working there i am a multitasker",
        "5. and i work on low wages what great than that",
    ];

    const iconImages = [react, js, html, firebase ];


 return (
        <div className="experience_container" >
            <p className="experience_title">Experience</p>
            <div className="experience_cards_container">
                
                    <ExperienceCard
                    companyName="Lakshmi Chit Fund"
                    designation="SDE"
                    statements={statements}
                    iconImages={iconImages}

                     />

<ExperienceCard
                    companyName="Gada Electronics"
                    designation="SDE"
                    statements={statements}
                    iconImages={iconImages}

                     />

<ExperienceCard
                    companyName="Fake Auto"
                    designation="SDE"
                    statements={statements}
                    iconImages={iconImages}

                     />



            </div>
           
        </div>


    );
}