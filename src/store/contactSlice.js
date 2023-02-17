import { createSlice } from '@reduxjs/toolkit';

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
            state.contacts = action.payload;
        },
        setSingleContact: (state, action) => {
            if(action.payload.id){
                
                state.singleContact = action.payload;
            }else{
                const contact = state.contacts.find(item => item.id === action.payload);
                state.singleContact = contact;
            }
        },
        addContact: (state, action) => {

            state.contacts.push(action.payload);
        },
        removeContact: (state, action) => {
            const updatedData = state.contacts.filter(item => item.name !== action.payload);
            state.contacts = updatedData;
            state.singleContact = {};

        },
        updateContact: (state, action) => {

            //Find index of specific object using findIndex method.    
            let objIndex = state.contacts.findIndex((obj => obj.id === action.payload.id));
            //Update object's name property.
            state.contacts[objIndex] = action.payload;
            state.singleContact = action.payload;

        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }


    },
})

// Action creators are generated for each case reducer function

export const { getContacts, setContactId, setLoading } = contactSlice.actions;


export const getSingleContactfromAPI = (id) => {

    return async (dispatch) => {
        dispatch(contactSlice.actions.setLoading(true));

        const getData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data = res.json();
            return data;
        }

        try {
            if (id <= 10) {
                 const data = await getData();
                dispatch(contactSlice.actions.setSingleContact(data));
            }else{
                dispatch(contactSlice.actions.setSingleContact(id));
            }
        } catch (err) {
            console.log('Error hai bhai', err);
        }
        dispatch(contactSlice.actions.setLoading(false));
    }
}

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
             await getData();
            dispatch(contactSlice.actions.updateContact(contact));
        } catch (err) {
            console.log('Error hai bhai', err);
        }
        dispatch(contactSlice.actions.setLoading(false));
    }
}


export const addContacts = (contact) => {

    return async (dispatch) => {
        dispatch(contactSlice.actions.setLoading(true));
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
            await getData();
            dispatch(contactSlice.actions.addContact(contact));
        } catch (err) {
            console.log('Error hai bhai', err);
        }
        dispatch(contactSlice.actions.setLoading(false));
    }
}


export const getContactsfromAPI = () => {

    return async (dispatch) => {
        dispatch(contactSlice.actions.setLoading(true));
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
        dispatch(contactSlice.actions.setLoading(false));
    }
}


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
            await removeData();
            dispatch(contactSlice.actions.removeContact(id));
        } catch (err) {
            console.log('Error hai bhai', err);
        }
        dispatch(contactSlice.actions.setLoading(false));
    }
}


export default contactSlice;