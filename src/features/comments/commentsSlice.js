import {createSlice} from '@reduxjs/toolkit';

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {},
    reducers: {}
});

export const selectComments = state => state.categories.categories;
export default commentsSlice.reducer;