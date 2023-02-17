import ContactList from "./ContactList";
import SingleContact from "./SingleContact";


const ContactBook = () => {

  return (
    <section className="w-full  md:h-[90vh] p-5 flex flex-col md:flex-row justify-between items-center">


      <div className="left  w-[100%] md:w-[48vw] h-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-md drop-shadow-2xl p-3 flex justify-center items-center mb-2  ">
        <SingleContact />
      </div>


      <div className="right  w-[100%] md:w-[48vw] h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md drop-shadow-2xl p-6 overflow-x-hidden  overflow-y-auto">
        <ContactList  />
      </div>
    </section>
  )
}

export default ContactBook;

