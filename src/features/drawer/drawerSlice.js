import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false,
};

const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        toggleDrawer: (state) => {
            state.open = !state.open;
        },
    },
});

export const { toggleDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
