import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projects } from "../../portfolio.js";
import { projectDetails } from "../../portfolio.js";
import "./Projects.css";
import { FaCalendarAlt, FaTools } from "react-icons/fa";

class ProjectDetail extends Component {
  render() {
    const theme = this.props.theme;
    const { id } = this.props.match.params;
    const project = projects["data"].find((p) => p.id === id);
    const projectDetail = projectDetails[project.id];
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
            <div className="project-detail-block">
              <h1 className="project-detail-heading">Introduction</h1>
              <p className="project-detail-body">
                {projectDetail.introduction}
              </p>
            </div>
            <div className="project-detail-block">
              <h1 className="project-detail-heading">Scope and Feature</h1>
              <p className="project-detail-body">
                {projectDetail.scope.description}
              </p>
              <ul className="project-detail-list">
                {projectDetail.scope.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="project-detail-block">
              <h1 className="project-detail-heading">Methodology and Tools</h1>
              <p className="project-detail-body">
                {projectDetail.methodology.description}
              </p>
              <ul className="project-detail-list">
                {projectDetail.methodology.tools.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="project-detail-block">
              <h1 className="project-detail-heading">Result</h1>
              <p className="project-detail-body">
                {projectDetail.result.description}
              </p>
              <ul className="project-detail-list">
                {projectDetail.result.outcomes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {projectDetail.result.url != "" ? (
                <a
                  href={projectDetail.result.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-detail-link"
                  style={{ color: theme.link }}
                >
                  View Project
                </a>
              ) : (
                <div className="project-detail-iframe-wrapper">
                  <iframe
                    title="Project Result"
                    width="785"
                    height="600"
                    src={projectDetail.result.iframe}
                    frameBorder="0"
                    allowFullScreen
                    className="project-detail-iframe"
                  ></iframe>
                </div>
              )}
            </div>
          </Fade>
        </div>
        {/* <Footer theme={theme} onToggle={this.props.onToggle} /> */}
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default ProjectDetail;
