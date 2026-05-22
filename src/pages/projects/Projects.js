import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import ProjectCard from "../../components/projectsCard/ProjectCard";
// import ProjectCard from "../../components/projectlicationsCard/projectlicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader, projects } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assets/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>

        <div className="repo-cards-div-main">
          {projects.data.map((project) => {
            return (
              <ProjectCard project={project} theme={theme} key={project.id} />
            );
          })}
        </div>

        <div style={{ paddingBottom: "25px" }}>
          <Button
            text={"More Projects"}
            className="project-button"
            href={greeting.githubProfile}
            newTab={true}
            theme={theme}
          />
        </div>

        {/* projectlications  */}
        {/* {projectlications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="projectlications-heading-div">
                <div className="projectlications-heading-text-div">
                  <h1
                    className="projectlications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {projectlicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {projectlicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {projectlications.data.map((project) => {
            return <projectlicationCard project={project} theme={theme} />;
          })}
        </div> */}

        {/* <Footer theme={this.props.theme} onToggle={this.props.onToggle} /> */}
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
