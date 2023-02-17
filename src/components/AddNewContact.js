import React from 'react';
import Form from './Form';
import { addContacts } from '../store/contactSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const AddNewContact = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = (formData) => {
    let id = "id" + Math.random().toString(16).slice(2);

    const { name, username, city, email, phone, website, street, zipcode } = { ...formData };

    const finalUpdate = {
      id,
      name,
      email,
      phone,
      username,
      website,
      address: {
        city,
        zipcode,
        street
      }
    }

      dispatch(addContacts(finalUpdate));
      navigate('..');
  }

  return (
    <>
      <div className="editContact w-full h-[92vh] bg-gradient-to-t from-cyan-500 to-blue-500 flex justify-center items-center ">

        <div className="single w-[90%] md:w-[70%] h-[97%] md:h-[85%] bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 p-5 flex flex-col justify-start items-center ">

          <Form submitFunction={handleSubmit}>
            <div className="btn w-full ">
            <input type="submit" className="w-full bg-cyan-800 text-white p-2 rounded-md hover:opacity-80 active:text-black italic" value={'Submit'} />
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default AddNewContact;