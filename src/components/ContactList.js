import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/exports";
import { getSingleContactfromAPI } from "../store/contactSlice";


const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contact.contacts);  
    
    const setContactId = (e) => {
        const check =e.target.getAttribute("id");
        
        // const selectedContactID = Number(e.target.getAttribute("id")) + 1;
        // dispatch(getSingleContactfromAPI(selectedContactID-1));
        dispatch(getSingleContactfromAPI(check));
    }

    if(contacts.length === 0 ){

        return <>
         <p className="text-center text-xl text-white italic ">Kindly add contacts to show</p>
        </>
    }

    return (
        <>
            {
                contacts.map((contact,idx) => {
                    return (
                        <div className="contact flex justify-between items-center h-5 w-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-500 p-6 m-2 cursor-pointer hover:scale-105 transition-all" key={idx + 'afg'} >
                            <div className='w-[70%] flex items-center'>
                                <img src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" alt="person" className='w-8 h-auto rounded-full' />
                                <div className='mx-4 w-full text-sm'>
                                    <h3>{contact.name}</h3>
                                </div>
                            </div>
                            <p className='italic text-gray-900 active:text-red-600' onClick={setContactId} id={contact.id}>See</p>
                        </div>)
                })}
        </>
    )
}

export default ContactList;

