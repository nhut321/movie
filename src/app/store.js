import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import headerSlice from '../components/Header/headerSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    header: headerSlice
  },
});
