import mountainSelfie from '../assets/mountain-selfie.webp';

export default function Header() {
  const greetings: string[] = ['Hi', 'Hey', 'Hello', 'Welcome', 'Greetings'];

  const randomGreeting: string = greetings[Math.floor(Math.random() * greetings.length)];

  return (
    <header className="relative max-w-full w-screen h-200">
      <img
        src={mountainSelfie}
        alt="Photo of me on a mountain top"
        className="absolute h-full w-full object-cover object-[0%_35%]"
      />
      <div className="relative z-10 flex flex-col items-end h-full px-4 2xl:px-20 pt-18 text-white text-shadow-lg/80 bg-gradient-to-r from-transparent from-40% to-gray-900/50">
        <h1 className="text-4xl md:text-6xl text-right font-bold lg:ml-64">{randomGreeting}, I'm Alexander Zimdahl</h1>
        <h2 className="text-3xl md:text-4xl mt-4 md:mt-10">Software Engineer</h2>
        <div className="block md:text-right text-xl md:text-2xl 2xl:text-3xl max-w-xl lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl mt-64 md:mt-56 lg:mt-32 xl:mt-52">
          <p className="mb-5">I'm a Software Development Engineer focused on building clean, scalable, and user-centered web applications. With nearly five years of experience across front-end and back-end technologies, I bring a thoughtful, problem-solving approach to every project.</p>
          <p>Take a look around to see what I've been working on.</p>
        </div>
      </div>
    </header>
  );
}