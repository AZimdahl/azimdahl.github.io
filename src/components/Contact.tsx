import Card from "./Card";
import ContactButtons from "./ContactButtons";

export default function Contact() {
  return (
    <Card title="Contact">
      <div className="flex flex-col justify-between items-center p-2">
        <div className="text-xl 2xl:text-2xl mb-6">
          <p className="p-2">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          <p className="p-2">Whether you're looking for a developer, a collaborator, or just want to say hi, feel free to reach out!</p>
          <p className="p-2">Let's connect and see how we can work together.</p>
        </div>
        <ContactButtons />
        {/* <form className="flex flex-col w-1/2 p-2 border-solid border-2 border-gray-300 rounded-md">
          <input type="text" placeholder="Name" className="bg-gray-800 m-1 p-2 rounded" />
          <input type="email" placeholder="Email" className="bg-gray-800 m-1 p-2 rounded" />
          <textarea placeholder="Message" className="bg-gray-800 m-1 p-2 rounded"/>
          <button type="submit">Submit</button>
        </form> */}
      </div>
    </Card>
  )
}
