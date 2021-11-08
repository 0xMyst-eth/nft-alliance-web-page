import React from "react";
import { Project } from "../project";
import { ProjectCard } from "./ProjectCard";

export function ProjectList({
  projects,
}: {
  projects: Project[];
}): React.ReactElement {
  return (
    <div>
      <div className="project-list">
        {projects.map(p => (
            <div className="project-wrapper" key={p.title}>
                <ProjectCard project={p} />
            </div>
        ))}
      </div>
      <style jsx>{`
        .project-list {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
        }

        .project-wrapper {
            padding: 15px;
            width: 50%;
        }

        @media only screen and (max-width: 600px) {
          .project-wrapper {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
