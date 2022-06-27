import React from "react";
import "./Projects.css";
import ProjectBox from "./ProjectBox/ProjectBox" ;
import amazonClone from "../../images/amazonClone.png";



export default function Projects() {
    const projectData = [
      {
        image:
        "https://tse4.mm.bing.net/th?id=OIP.oqdZk5honSziOOxFaK8e8gHaGD&pid=Api&P=0&w=217&h=177",
        title: "code runners",
        sentences: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh lorem, consequat vel pellentesque quis, varius vitae odio.",
          "Vivamus pretium libero tortor, eget iaculis ex fermentum nec. Nulla leo ligula, aliquet ac suscipit ut, mollis vitae tellus. Mauris iaculis neque",
          "Aliquam eget arcu dictum, vulputate elit ac, mollis eros. Maecenas eget iaculis velit. Duis nunc urna, semper sed nunc sed, placerat pellentesque leo. ",
          "Aliquam eget arcu dictum, vulputate elit ac, mollis eros. Maecenas eget iaculis velit. Duis nunc urna, semper sed nunc sed, placerat pellentesque leo. ",
        ],
        link: "https://www.google.co.in/",
      },

        


     


          {
            image:
              "https://tse4.mm.bing.net/th?id=OIP.oqdZk5honSziOOxFaK8e8gHaGD&pid=Api&P=0&w=217&h=177",
            title: "code review site",
            sentences: [
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh lorem, consequat vel pellentesque quis, varius vitae odio.",
              "Vivamus pretium libero tortor, eget iaculis ex fermentum nec. Nulla leo ligula, aliquet ac suscipit ut, mollis vitae tellus. Mauris iaculis neque",
              "Aliquam eget arcu dictum, vulputate elit ac, mollis eros. Maecenas eget iaculis velit. Duis nunc urna, semper sed nunc sed, placerat pellentesque leo. ",
              "Aliquam eget arcu dictum, vulputate elit ac, mollis eros. Maecenas eget iaculis velit. Duis nunc urna, semper sed nunc sed, placerat pellentesque leo. ",
            ],
            link: "https://www.google.co.in/",
          },
    ];





return (
    <div>
        <p className="projects_title">Projects</p>
        <div className="projects_box_container">
            {projectData.map((value, index) => (
                <ProjectBox
                title={value.title}
                image={value.image}
                sentences={value.sentences}
                link={value.link}
                
                />
            ))}
        </div>
    </div>

);
}