import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        filter: ""
      },

    reducers: {
        addContact(state, action) {
            state.contacts = action.payload: {

            };
        },
        deleteContact(state, action) {
            state.contacts = action.payload;
        },
    }
})