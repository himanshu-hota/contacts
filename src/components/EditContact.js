import React from 'react';
import { useSelector,useDispatch } from "react-redux/es/exports";
import {useNavigate} from "react-router-dom";
import { removeContactfromAPI } from '../store/contactSlice';

const EditContact = () => { 
    const data = useSelector(state => state.contact.singleContact);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log(data.address.street);

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log('update clicked!!!');
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(removeContactfromAPI(data.id));
        navigate('..');
    }

  return (
      <div className="editContact w-full h-[92vh] bg-gradient-to-t from-cyan-500 to-blue-500 flex justify-center items-center ">

          <div className="single w-[90%] md:w-[70%] h-[95%] bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 p-5 flex flex-col justify-start items-center ">

            <form className='w-full h-full '>
                  <div className='w-full text-xl grid grid-cols-1 md:grid-cols-2'>
                      <label htmlFor="name" >Name : </label>
                      <input type="text" className='border-none outline-none p-1 my-1 rounded-md' name='name' id='name' placeholder='Name' defaultValue={data.name} />
                  </div>
                  <div className='w-full py-2 text-xl grid grid-cols-1 md:grid-cols-2'>
                      
                      <label htmlFor="email">Email : </label>
                      <input type="text" className='border-none outline-none p-1 my-1 rounded-md' name='email' id='email' placeholder='Email' defaultValue={data.email} />
                  </div>
                  <div className='w-full py-2 text-xl grid grid-cols-1 md:grid-cols-2'>
                      <label htmlFor="phone">Phone : </label>
                      <input type="text" className='border-none outline-none p-1 my-1 rounded-md' name='phone' id='phone' placeholder='Phone' defaultValue={data.phone} />
                  </div>
                  <div className='w-full py-2 text-xl grid grid-cols-1 md:grid-cols-2'>
                      <label htmlFor="website">Website : </label>
                      <input type="text" className='border-none outline-none p-1 my-1 rounded-md' name='website' id='website' placeholder='Website' defaultValue={data.website} />
                  </div>
                  <div className='w-full py-2 text-xl grid grid-cols-1 md:grid-cols-2'>
                      <label htmlFor="username">Username : </label>
                      <input type="text" className='border-none outline-none p-1 my-1 rounded-md' name='username' id='username' placeholder='Username' defaultValue={data.username} />
                  </div>
                  <div className='w-full py-2 text-xl grid grid-cols-1 md:grid-cols-2'>
                      <label htmlFor="address">Address : </label>
                      <div className="address grid grid-cols-3 gap-3" id='address'>
                          <input type="text" className='border-none outline-none p-1 my-1 rounded-md' name='street' id='street' placeholder='Street' defaultValue={data.address.street} />
                          <input type="text" className='border-none outline-none p-1 my-1 
                          rounded-md' name='city' id='city' placeholder='City' defaultValue={data.address.city} />
                          <input type="text" className='border-none outline-none p-1 my-1 rounded-md' name='zip' id='zip' placeholder='Zip' defaultValue={data.address.zipcode} />
                      </div>
        
                  </div>
                  <div className="btn w-full grid grid-cols-2 gap-3">
                      <button className="w-full bg-cyan-800 text-white p-2 rounded-md hover:opacity-80 active:text-black italic" onClick={handleUpdate}>Update</button>
                      <button className="w-full bg-red-600 text-white p-2 rounded-md hover:opacity-80 active:text-black italic" onClick={handleDelete}>Delete</button>
                  </div>
            </form>

          </div>
    </div>
  )
}

export default EditContact;
