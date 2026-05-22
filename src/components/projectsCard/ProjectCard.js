import React from "react";
import "./ProjectCard.css";
import { useHistory } from "react-router-dom";

export default function ProjectCard({ project, theme }) {
  const history = useHistory();
  // const projectImage = `/images/${project.id}.png`;
  const handleClick = (id) => {
    history.push(`/project/${id}`);
  };

  return (
    <div className="project-card-div">
      <div
        key={project.id}
        className="project-card"
        onClick={() => handleClick(project.id)}
        style={{
          backgroundColor: theme.highlight,
        }}
      >
        <img
          src={`/images/${project.id}.png`}
          alt={project.name}
          className="project-image"
        />

        <div className="project-content">
          <h2 className="project-name" style={{ color: theme.text }}>
            {project.name}
          </h2>

          <p
            className="project-description"
            style={{ color: theme.secondaryText }}
          >
            {project.description}
          </p>

          <p className="project-tech" style={{ color: theme.secondaryText }}>
            Technology: {project.tech}
          </p>

          <span
            className="project-readmore"
            style={{ color: theme.accentColor }}
          >
            Read More →
          </span>
        </div>
      </div>
    </div>
  );
}
