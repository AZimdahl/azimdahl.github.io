import { ReactElement } from "react"

import Card from "./Card"

export default function About({ type }: { type?: string }) {
  let about: ReactElement = <div className="p-2 xl:text-xl 2xl:text-2xl xl:p-4 2xl:p-8 xl:pt-2">
    <p className="pb-4 xl:pb-8 2xl:pb-10">Hi, I'm Alexander Zimdahl, a versatile Software Development Engineer with a strong foundation in both front-end and back-end development. I specialize in building scalable web applications using technologies like Angular, React, and SQL, and I'm driven by a passion for problem-solving, clean architecture, and seamless user experiences.</p>
    <p className="pb-4 xl:pb-8 2xl:pb-10">I graduated from Kenzie Academy with a focus on front-end engineering and earned my B.S. in Game Design from Full Sail University. While my early experiences came from structured learning, much of my growth has come from self-directed study and hands-on projects where I've tackled increasingly complex challenges. I've also explored game development through Unity and C#, but my professional focus has shifted to web and app development, where I enjoy diving into technical details like scripting, API integration, and performance optimization.</p>
    <p className="pb-4 xl:pb-8 2xl:pb-10">Outside of engineering, I have a lifelong interest in games, which has influenced how I think about interaction, systems, and design.</p>
    <p>I'm looking for opportunities where I can apply my skills, continue growing, and contribute to meaningful, collaborative projects. Thanks for visiting my portfolio.</p>
  </div>

  if (type === 'web') {
    about = <>
      <p>Web</p>
    </>
  } else if (type === 'game') {
    about = <>
      <p>Game</p>
    </>
  }

  return (
    <Card title="About">
      {about}
    </Card>
  )
}