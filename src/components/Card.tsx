import { ReactNode,  } from "react";
import { useLocation } from "react-router-dom";

export default function Card({ children, title }: { children: ReactNode; title: string }) {
  const location = useLocation();

  const isProjectPage = location.pathname.startsWith("/projects/");
  let classes = "p-1 rounded-lg bg-radial-[at_25%_25%] from-indigo-500 via-purple-500 to-sky-500 to-75% shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out";

  if (isProjectPage) {
    classes += " mt-10"
  }


  return (
    <article
      id={title.toLowerCase()}
      className={classes}>
      <div className="h-full p-4 rounded bg-gray-900 relative z-0">
        <h1 className="
          relative inline-block text-3xl 2xl:text-4xl pb-6 font-semibold
          before:content-[''] before:bg-fuchsia-600 before:absolute before:top-8 before:left-4 before:h-2 before:-z-10 before:w-full"
        >
          {title}
        </h1>
        {children}
      </div>
    </article>
  );
}