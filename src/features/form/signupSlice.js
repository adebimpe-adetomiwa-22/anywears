import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        updateInput: (state, { payload: { name, value } }) => {
            state[name] = value;
        },
    },
});

export const { updateInput } = signupSlice.actions;

export default signupSlice.reducer;
