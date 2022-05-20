import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from '../features/categories/categoriesSlice';
import commentsSlice from '../features/comments/commentsSlice';
import listingsSlice from '../features/listings/listingsSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    comments: commentsSlice,
    listings: listingsSlice
  },
});
