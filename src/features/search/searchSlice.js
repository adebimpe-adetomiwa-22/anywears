import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searching: false,
    searchValue: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        search: (state, action) => {
            state.searchValue = action.payload;
            if (action.payload == '') {
                state.searching = false;
                return;
            }
            if (!state.searching) {
                state.searching = true;
            }
        },
        clear: (state) => {
            state.searchValue = '';
            state.searching = false;
        },
    },
});

export const { search, clear } = searchSlice.actions;

export default searchSlice.reducer;
