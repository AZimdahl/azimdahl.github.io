import Skills from "./Skills"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"

export default function CardGroup() {
  return (
    <main className="mx-6 my-8">
      {/* <button>Web Development</button>
        <button>Game Design</button> */}
      <section className="flex max-lg:flex-col lg:items-stretch justify-center gap-2 lg:gap-4 w-full my-6">
        <div>
          <div className="flex max-lg:flex-col items-stretch justify-center gap-2 lg:gap-4 w-full">
            <Skills />
            <About />
          </div>
          {/* Contact for large screens */}
          <div className="hidden lg:block mt-2 lg:mt-6">
            <Contact />
          </div>
        </div>
        <Projects show="thumbnail" />
        {/* Contact for small screens */}
        <div className="lg:hidden mt-2">
          <Contact />
        </div>
      </section>
    </main>
  )
}