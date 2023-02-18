import { createSlice } from '@reduxjs/toolkit';

// Initial state for the store
const initialState = {
    contacts: [],
    singleContact: {},
    loading: false
}

export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        getContacts: (state, action) => {
            // Set data to store
            state.contacts = action.payload;
        },
        setSingleContact: (state, action) => {

            if (action.payload.id) {
                // if contact was from api the set data directly
                state.singleContact = action.payload;
            } else {
                // if data was added manually then set it manually
                const contact = state.contacts.find(item => item.id === action.payload);
                state.singleContact = contact;
            }
        },
        addContact: (state, action) => {
            // Add new contact to the store
            state.contacts.push(action.payload);
        },
        removeContact: (state, action) => {
            // filter out the contact
            const updatedData = state.contacts.filter(item => item.name !== action.payload);
            // set updated data to store
            state.contacts = updatedData;
            // reset single contact
            state.singleContact = {};

        },
        updateContact: (state, action) => {

            //Find index of specific contact using findIndex method.    
            let contact = state.contacts.findIndex((obj => obj.id === action.payload.id));
            //Update contact here.
            state.contacts[contact] = action.payload;
            // update single contact
            state.singleContact = action.payload;

        },
        setLoading: (state, action) => {
            // Set loading state
            state.loading = action.payload;
        }

    },
})



// Action functions
export const { getContacts, setContactId, setLoading } = contactSlice.actions;


// ---------------------- Action creators-----------------------------

// Action creator to get info of single user
export const getSingleContactfromAPI = (id) => {

    return async (dispatch) => {
        dispatch(contactSlice.actions.setLoading(true));
        // call to API (dummy call)
        const getData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data = res.json();
            return data;
        }

        try {
            // if data was from API then send API call
            if (id <= 10) {
                const data = await getData();
                dispatch(contactSlice.actions.setSingleContact(data));
            } else {
                // else send id to store and manually find the data
                dispatch(contactSlice.actions.setSingleContact(id));
            }
        } catch (err) {
            console.log('Error hai bhai', err);
        }
        dispatch(contactSlice.actions.setLoading(false));
    }
}

// Action creator to update existing data
export const updateContacts = (contact) => {

    return async (dispatch) => {
        dispatch(contactSlice.actions.setLoading(true));
        const getData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'PUT',
                body: JSON.stringify(contact),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const data = res.json();
            return data;
        }

        try {
            // call to API (dummy call)
            await getData();
            // Update data in store manually 
            dispatch(contactSlice.actions.updateContact(contact));
        } catch (err) {
            console.log('Error hai bhai', err);
        }
        dispatch(contactSlice.actions.setLoading(false));
    }
}

// Action creator to add contact to the store
export const addContacts = (contact) => {

    return async (dispatch) => {
        dispatch(contactSlice.actions.setLoading(true));

        // As it is a dummy call we can not send our desired data 
        const getData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const data = res.json();
            return data;
        }

        try {
            // call to API (dummy call)
            await getData();
            // Set data to store manually
            dispatch(contactSlice.actions.addContact(contact));
        } catch (err) {
            console.log('Error hai bhai', err);
        }
        dispatch(contactSlice.actions.setLoading(false));
    }
}

// Action creator to get contacts from API
export const getContactsfromAPI = () => {

    return async (dispatch) => {
        dispatch(contactSlice.actions.setLoading(true));
        const getData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
            const data = res.json();
            return data;
        }

        try {
            //Get data from API
            const data = await getData();
            // Set data to store
            dispatch(contactSlice.actions.getContacts(data));
        } catch (err) {
            console.log('Error hai bhai', err);
        }
        dispatch(contactSlice.actions.setLoading(false));
    }
}

// Action creator to remove contact 
export const removeContactfromAPI = (id) => {

    return async (dispatch) => {
        dispatch(contactSlice.actions.setLoading(true));
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
            //call to API
            await removeData();
            // as it is dummy call we need to remove data from store manually
            dispatch(contactSlice.actions.removeContact(id));
        } catch (err) {
            console.log('Error hai bhai', err);
        }
        dispatch(contactSlice.actions.setLoading(false));
    }
}


export default contactSlice;