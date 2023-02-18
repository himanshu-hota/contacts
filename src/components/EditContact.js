import React from 'react';
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { removeContactfromAPI } from '../store/contactSlice';
import Loading from './Loading';
import { updateContacts } from '../store/contactSlice';
import Form from './Form';

const EditContact = () => {
    // get contact data from store
    const data = useSelector(state => state.contact.singleContact);
    // react router hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //get loading state from store
    const loading = useSelector(state => state.contact.loading);



    const handleDelete = (e) => {
        e.preventDefault();
        // delete data with specified id
        dispatch(removeContactfromAPI(data.name));
        // go back to the previous page
        navigate('..');
    }


    const handleUpdate = (updatedData) => {

        // get data from the form
        const { name, username, city, email, phone, website, street, zipcode } = { ...updatedData };

        // set data as required in the store
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
        // update data in the store
        dispatch(updateContacts(finalUpdate));
        // go back the previous page
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
                {/* if data is loading then show loader */}
                {loading && <Loading />}
                {/* if data is loaded successfully then show the form */}
                {!loading && <EditForm />}

            </div>
        </div>
    )
}

export default EditContact;

