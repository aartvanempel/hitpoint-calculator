import { createSlice } from '@reduxjs/toolkit';

export const screenVisibility = createSlice({
    name: 'screenVisibility',
    initialState: {
        createMonster: true,
        editMonster: false,
        faq: false,
        resetDialog: false
    },
    reducers: {
        toggleScreen: (state, action) => {
            state[action.payload.screen] = !state[action.payload.screen]
        },
    },
});

export const selectScreenVisibility = state => state.screenVisibility;

export const {
    toggleScreen
} = screenVisibility.actions;

export default screenVisibility.reducer;
