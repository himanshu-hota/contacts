import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    contacts:[],
    singleContact:{}
}

export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        getContacts:(state,action) => {
            state.contacts = action.payload;
        },
        setSingleContact:(state,action) => {
            state.singleContact = action.payload;
        },
        removeContact:(state,action) => {
            const updatedData = state.contacts.filter(item => item.id !== action.payload);
            state.contacts = updatedData;
            state.singleContact = {};
        }
        

    },
})

// Action creators are generated for each case reducer function

export const { getContacts ,setContactId} = contactSlice.actions;


export const getSingleContactfromAPI = (id) => {
    
    return async (dispatch) => {

        const getData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data = res.json();
            return data;
        }

        try {
            const data = await getData();
            dispatch(contactSlice.actions.setSingleContact(data));
        } catch (err) {
            console.log('Error hai bhai', err);
        }

    }
}

export const getContactsfromAPI = () => {

    return async (dispatch) => {
        
        const getData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
            const data = res.json();
            return data;
        }

        try {
            const data = await getData();
            dispatch(contactSlice.actions.getContacts(data));
        } catch (err) {
            console.log('Error hai bhai', err);
        }

    }
}


export const removeContactfromAPI = (id) => {
    console.log(id);
    return async (dispatch) => {

        const removeData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: 'DELETE',
            });
            const data = res.json();
            if (!res.ok) {
                console.log('it was a dummy call to delete contact');
            }
            
            return data;
        }

        try {
            const data = await removeData();
            console.log(data);
            dispatch(contactSlice.actions.removeContact(id));
        } catch (err) {
            console.log('Error hai bhai', err);
        }

    }
}


export default contactSlice;