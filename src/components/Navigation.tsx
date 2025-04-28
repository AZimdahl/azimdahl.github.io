import { Link, useLocation } from "react-router-dom";
import ContactButtons from "./ContactButtons"

export default function Navigation() {
  const location = useLocation();

  const isHomePage: boolean = location.pathname === "/";
  const isAboutPage: boolean = location.pathname === "/about";
  const isProjectPage: boolean = location.pathname.startsWith("/projects")

  return (
    <nav className="fixed max-w-screenmax mx-auto top-0 left-0 right-0 z-20 bg-gray-800/95">
      <div className="flex justify-between items-center text-lg px-4 py-3">
        <div className="flex gap-4">
          <a href="/" className={`${isHomePage && 'text-emerald-400'} hover:text-red-400 hover:scale-105 transition-transform duration-10 ease-in-out`}>Home</a>
          <a href="/#about" className={`${isAboutPage && 'text-emerald-400'} hover:text-red-400 hover:scale-105 transition-transform duration-10 ease-in-out`}>About Me</a>
          {/* <a>Professional Work</a> */}
          <Link to="/projects/all" className={`${isProjectPage && 'text-emerald-400'} hover:text-red-400 hover:scale-105 transition-transform duration-10 ease-in-out`}>Projects</Link>
        </div>
        <ContactButtons hardSize="size-8"/>
      </div>
    </nav>
  );
}
