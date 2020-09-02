import React, { Component } from "react";
import Button from "@material-ui/core/Button";

const row = {
  display: "flex",
};

const right = {
  marginLeft: "auto",
};

class ProjectCard extends Component {
  render() {
    return (
      <div>
        <div style={row}>
          <div>
            <h2>{this.props.name}</h2>
          </div>
          <div style={right}>
            <Button variant="contained">Back to Top</Button>
          </div>
        </div>
        <div>
          <img src={this.props.img} alt="img" />
        </div>
        <div>
          <h3> {this.props.desc}</h3>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
