import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projects } from "../../portfolio.js";
import "./Projects.css";
import { FaCalendarAlt, FaTools } from "react-icons/fa";

class ProjectDetail extends Component {
  render() {
    const theme = this.props.theme;
    const { id } = this.props.match.params;
    const project = projects["data"].find((p) => p.id === id);
    const projectImage = `/images/${project.id}.png`;

    if (!project) {
      return (
        <div style={{ padding: "2rem", color: theme.text }}>
          Project not found.
        </div>
      );
    }

    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade left duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <img
                  src={projectImage}
                  alt={project.name}
                  onError={(e) => {
                    e.currentTarget.src = "/images/default.png";
                  }}
                />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {project.name}
                </h1>
                <p
                  className="project-date"
                  style={{ color: theme.secondaryText }}
                >
                  <FaCalendarAlt style={{ marginRight: "8px" }} /> Created at:{" "}
                  {project.created_at}
                </p>
                <p
                  className="project-tech-stack"
                  style={{ color: theme.secondaryText }}
                >
                  <FaTools style={{ marginRight: "8px" }} /> Tech Stack:{" "}
                  {project.tech}
                </p>
              </div>
            </div>
          </Fade>
          <Fade right duration={2000} distance="40px">
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <h1>Introduction</h1>
              <p>Coming Soon</p>
            </div>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <h1>Scope and Feature</h1>
              <p>Coming Soon</p>
            </div>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <h1>Methodology and Tools</h1>
              <p>Coming Soon</p>
            </div>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <h1>Result</h1>
              <p>Coming Soon</p>
            </div>
          </Fade>
        </div>
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default ProjectDetail;
