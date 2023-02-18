import ContactList from "./ContactList";
import SingleContact from "./SingleContact";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const ContactBook = () => {

  // get loading state from store
  const loading = useSelector(state => state.contact.loading);


  return (
    <section className="w-full  md:h-[90vh] p-5 flex flex-col md:flex-row justify-between items-center">


      <div className="left  w-[100%] md:w-[48vw] h-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-md drop-shadow-2xl p-3 flex justify-center items-center mb-2  ">
      {/* Show loader if data is not loaded yet */}
        {loading && <Loading />}
        {/* Show contact info if the data has loaded successfully */}
        {!loading && <SingleContact />}
      </div>


      <div className="right  w-[100%] md:w-[48vw] h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md drop-shadow-2xl p-6 overflow-x-hidden  overflow-y-auto ">
        {/* Show loader if data is not loaded yet */}
        {loading && <Loading />}
        {/* Show contact list info if the data has loaded successfully */}
        {!loading && <ContactList />}
        
      </div>
    </section>
  )
}

export default ContactBook;

