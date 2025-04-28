import Projects from "../components/Projects";
import { PROJECTS } from "../data/projectList"
import { useParams } from "react-router-dom";

export default function Project() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS.find((project) => project.id === projectId);

  return (
    project ? (
      <>
        <header className="flex flex-col lg:flex-row items-center justify-baseline gap-10 p-10 mt-15 shadow-md rounded-lg">
          <img src={project.thumbnail} alt={`${project.name} logo`} className="w-xs lg:w-sm h-auto lg:my-0 rounded" />
          <h1 className="relative text-4xl lg:text-6xl font-bold before:content-[''] before:bg-fuchsia-600 before:absolute before:top-12 before:left-6 before:h-4 before:-z-10 before:w-full">{project.name}</h1>
        </header>
        <main className="mx-6 my-8">
          {project.imgs.map((img, index) => (
            <section
              key={index}
              className={`flex flex-col lg:flex-row ${index % 2 === 0 ? "lg:flex-row-reverse" : ""
                } items-center justify-around my-6`}
            >
              <img
                src={img}
                alt={`Project image ${index + 1}`}
                className="w-full lg:w-xl h-auto rounded-lg shadow-md"
              />
              <div className="w-full lg:w-1/2">
                <p className="text-lg mb-4">{project.description[index][0]}</p>
                {project.description[index].slice(1).map((desc, descIndex) => (
                  <p key={descIndex} className="text-lg mb-4">
                    {desc}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </main>
        <footer>
          <p className="my-4 mx-20">
            {project.linkText}{" "}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {project.link}
            </a>
          </p>
        </footer>
      </>) : (
      <main className="mx-6 my-8">
        <section className="flex max-lg:flex-col lg:items-stretch justify-center gap-2 lg:gap-4 w-full my-6">
          <Projects show="list" />
        </section>
      </main>
    )
  );
}