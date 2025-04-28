import { Link } from "react-router-dom";

import Card from "./Card";
import { PROJECTS } from "../data/projectList";

export default function Projects({ show }: { show?: string; }) {
  let containerClasses: string = "grid grid-cols-1 md:grid-cols-2 items-center justify-center";


  if (show === "list") {
    containerClasses += " mdgrid-cols-2 lg:grid-cols-4 gap-4";
  } else if (show === "thumbnail") {
    containerClasses += " lg:grid-cols-1 gap-2"
  }

  return (
    <Card title="Projects">
      <div className={containerClasses}>
        {PROJECTS.map(project => (
          <Link to={`/projects/${project.id}`} key={project.name} className="relative group hover:scale-105 transition-transform duration-300 ease-in-out">
            <img src={project.thumbnail} alt={`${project.name} logo`} className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out">
              <h1 className="text-white text-xl">{project.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}