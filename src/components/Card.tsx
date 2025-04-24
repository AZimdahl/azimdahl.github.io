import { ReactNode } from "react";

export default function Card({ children, title }: { children: ReactNode; title: string }) {
  return (
    <article
      id={title.toLowerCase()}
      className="p-1 rounded-lg bg-radial-[at_25%_25%] from-indigo-500 via-purple-500 to-sky-500 to-75% shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="h-full p-4 rounded bg-gray-900 relative z-0">
          <h1 className="
            relative inline-block text-3xl mb-4 font-semibold
            before:content-[''] before:bg-fuchsia-500 before:absolute before:top-6.5 before:left-4 before:h-2 before:-z-10 before:w-full"
          >
          {title}
        </h1>
        {children}
      </div>
    </article>
  );
}