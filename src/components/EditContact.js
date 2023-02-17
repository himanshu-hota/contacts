import React from 'react';
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { removeContactfromAPI } from '../store/contactSlice';
import Loading from './Loading';
import { updateContacts } from '../store/contactSlice';
import Form from './Form';

const EditContact = () => {
    const data = useSelector(state => state.contact.singleContact);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector(state => state.contact.loading);



    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(removeContactfromAPI(data.name));
        navigate('..');
    }


    const handleUpdate = (updatedData) => {

        const { name, username, city, email, phone, website, street, zipcode } = { ...updatedData };

        const finalUpdate = {
            id: data.id,
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

        dispatch(updateContacts(finalUpdate));
        navigate(-1);

    }


    const EditForm = () => {


        return (<>
            <Form data={data} submitFunction={handleUpdate} >
                <div className="btn w-full grid grid-cols-2 gap-3">
                    <input type="submit" className="w-full bg-cyan-800 text-white p-2 rounded-md hover:opacity-80 active:text-black italic" value={'Update'} />
                    <button className="w-full bg-red-600 text-white p-2 rounded-md hover:opacity-80 active:text-black italic" onClick={handleDelete}>Delete</button>
                </div>
            </Form>

        </>)
    }

    return (
        <div className="editContact w-full h-[92vh] bg-gradient-to-t from-cyan-500 to-blue-500 flex justify-center items-center ">

            <div className="single w-[90%] md:w-[70%] h-[95%] md:h-[70%] bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 p-5 flex flex-col justify-start items-center ">

                {loading && <Loading />}
                {!loading && <EditForm />}

            </div>
        </div>
    )
}

export default EditContact;
