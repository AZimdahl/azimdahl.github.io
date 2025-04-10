import mountainSelfie from '../assets/mountain-selfie.jpg';

export default function Header() {
  const greetings = ['Hello', 'Hi', 'Hey', 'Greetings', 'Salutations'];

  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

  return (
    <header className="relative w-screen h-180 bg-gray-100">
      <img
        src={mountainSelfie}
        alt="Photo of me on a mountain top"
        className="absolute w-full h-full object-cover object-[0%_35%]"
      />
      <div className="relative z-10 flex flex-col justify-baseline items-end h-full p-20 text-white bg-gradient-to-r from-transparent via-transparent to-gray-900">
        <h1 className="text-6xl font-bold">{randomGreeting}, I'm Alexander Zimdahl</h1>
        <h2 className="text-2xl mt-2">Software Engineer</h2>
        <p className="mt-4">Brief description</p>
      </div>
    </header>
  );
}