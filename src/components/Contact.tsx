import Card from "./Card";
import ContactButtons from "./ContactButtons";

export default function Contact() {
  return (
    <Card title="Contact">
      <div className="flex lg:flex-row justify-between items-center p-2">
        <div>
          <p className="text-xl p-4">Feel free to reach out to me via email or through my contact links.</p>
          <ContactButtons />
        </div>
        <form className="flex flex-col w-1/2 p-2 border-solid border-2 border-gray-300 rounded-md">
          <input type="text" placeholder="Name" className="bg-gray-800 m-1 p-2 rounded" />
          <input type="email" placeholder="Email" className="bg-gray-800 m-1 p-2 rounded" />
          <textarea placeholder="Message" className="bg-gray-800 m-1 p-2 rounded"/>
          <button type="submit"></button>
        </form>
      </div>
    </Card>
  )
}
