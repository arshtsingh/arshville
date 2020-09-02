// Projects.js
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Divider } from "@material-ui/core";
import ProjectCard from "./ProjectCard";

const tileData = [
  {
    img: "https://media.giphy.com/media/js63CxpiIO2x8AhXla/giphy.gif",
    title: "Joustr.io",
    description:
      "Joustr is a bracket tournament where users can make their own or play through existing tournaments.",
  },
  {
    img: "https://media.giphy.com/media/XZTgfBwEuOy7KFhb5p/giphy.gif",
    title: "Quotr",
    description:
      "This iphone application will send you a fresh quote everyday.",
  },
];

class Projects extends Component {
  render() {
    return (
      <div>
        <Divider variant="middle" />
        <h2>Projects</h2>
        <Button variant="contained" color="theme">
          Joustr
        </Button>
        <Button variant="contained" color="theme">
          Quotr
        </Button>
        <Divider variant="middle" />
        <div>
          {tileData.map((tile) => (
            <ProjectCard
              name={tile.title}
              img={tile.img}
              desc={tile.description}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
