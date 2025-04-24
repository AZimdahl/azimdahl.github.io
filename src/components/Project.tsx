import Projects from "./Projects";
import { PROJECTS } from "../data/projectList"

export default function Project({ name }: { name: string }) {

  const project = PROJECTS.find((project) => project.name === name);

  return (
    <>
      {project ? (
        <div className="flex flex-col items-center p-2">
          <img src={project.thumbnail} alt={`${project.name} logo`} className="w-7xl" />
          <h1>{project.name}</h1>
          <p>{project.description.join(' ')}</p>
        </div>
      ) : (
        <Projects show="thumbnail" />
      )}
    </>
  )
}