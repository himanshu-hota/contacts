import React from 'react';
import { useSelector } from "react-redux/es/exports";
import { useNavigate} from "react-router-dom";


const SingleContact = () => {
    // hook to navigate
    const navigate = useNavigate();
    // get data from store
    const singleContact = useSelector(state => state.contact.singleContact);
    // destructure data
    const { id, name, email, phone, username, website, address } = singleContact;
    
    // redirect to EditPage when edit button is clicked
    const handleEdit = () => {
        navigate(`${id}`);
    }
    

    return (
        <>
            {!id && <p className='text-white italic text-2xl'>Select any contact to see Details</p>}

            {id &&

                <div className="single w-[100%] md:w-[70%] h-[85%] bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 p-5 flex flex-col justify-start items-center">
                    <img src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" alt="person" className='w-16 h-auto rounded-full mb-3' />

                    <div className='w-full py-2 text-[1rem]'>
                        <h2>Name : {name} </h2>
                    </div>
                    <div className='w-full py-2 text-[1rem]'>
                        <p>Email : {email} </p>
                    </div>
                    <div className='w-full py-2 text-[1rem]'>
                        <p>Phone : {phone} </p>
                    </div>
                    <div className='w-full py-2 text-[1rem]'>
                        <p>Username : @{username} </p>
                    </div>
                    <div className='w-full py-2 text-[1rem]'>
                        <p>Website : {website} </p>
                    </div>
                    <div className=' w-full py-2 text-[1rem] flex justify-between  items-start'>
                        <p>Address : </p>

                        <div className="address w-[70%] text-base">
                            <div className="street flex justify-start text-[1rem]">
                                <p>Street : </p>
                                <p className="px-3">{address.street}</p>
                            </div>

                            <div className="City flex justify-start text-[1rem]">
                                <p>City : </p>
                                <p className="px-3">{address.city}</p>
                            </div>

                            <div className="Zip flex justify-start text-[1rem]">
                                <p>Zip : </p>
                                <p className="px-3">{address.zipcode}</p>
                            </div>
                        </div>
                    </div>

                    <div className="btn w-full">
                        <button className="w-full bg-cyan-800 text-white p-2 rounded-md hover:opacity-80 active:text-black italic" onClick={handleEdit}>Edit Contact</button>
                    </div>
                </div>
            }

        </>

    )
}

export default SingleContact;

