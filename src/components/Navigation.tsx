import ContactButtons from "./ContactButtons"

export default function Navigation() {
  return (
    <nav className="fixed max-w-screenmax mx-auto top-0 left-0 right-0 z-20 bg-gray-800/95">
      <div className="flex justify-between items-center text-md 2xl:text-lg px-4 py-3">
        <div className="flex gap-4">
          <a href="#about">About Me</a>
          {/* <a>Professional Work</a> */}
          <a href="#projects">Projects</a>
        </div>
        <ContactButtons />
      </div>
    </nav>
  );
}
