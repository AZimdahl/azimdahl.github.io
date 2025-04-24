import { ReactElement } from "react";

import Card from "./Card";
import { PROJECTS } from "../data/projectList";

export default function Projects({ show }: { show?: string; }) {
  let displayProjects: ReactElement = (<h1>Summary View</h1>);

  if (show === "summary") {
    displayProjects = displayProjects;
  } else {
    displayProjects = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2 overflow-y-auto">
        {PROJECTS.map(project => (
          <a href="" className="relative group" key={project.name}>
            <img src={project.thumbnail} alt={`${project.name} logo`} className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out">
              <h1 className="text-white text-xl">{project.name}</h1>
            </div>
          </a>
        ))}
      </div>
    )
  }

  return (
    <Card title="Projects">
      {displayProjects}
    </Card>
  );
}