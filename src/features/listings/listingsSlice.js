import {createSlice} from '@reduxjs/toolkit';
import {listings} from '../../app/data';

export const listingsSlice = createSlice({
    name: 'listings',
    initialState: {
         listings: listings
    },
    reducers: {}
});

export const selectListings = state => state.listings.listings;
export default listingsSlice.reducer;