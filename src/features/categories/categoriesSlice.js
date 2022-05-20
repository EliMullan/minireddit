import {createSlice} from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {},
    reducers: {}
});

export const selectCategories = state => state.categories.categories;
export default categoriesSlice.reducer;