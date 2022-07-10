import { createSlice } from '@reduxjs/toolkit';

export const onContactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        filter: '',
    },

    reducers: {
        setFilter(state, action) {
            state.filter = action.payload
        },
        addCotnacts(state, action) {
            state.items.push(action.payload);
        },
        removeContacts(state, action) {
            state.items = state.items.filter(
                contact => contact.id !== action.payload
            );
        },
    }
})

export const { setFilter, addCotnacts, removeContacts } =
    onContactsSlice.actions;