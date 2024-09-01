import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    password: '',
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        updateInput: (state, { payload: { name, value } }) => {
            state[name] = value;
        },
    },
});

export const { updateInput } = loginSlice.actions;

export default loginSlice.reducer;
