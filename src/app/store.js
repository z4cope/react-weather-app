import { configureStore } from '@reduxjs/toolkit';
import locationReducer from '../features/locations/locationSLice';

const store = configureStore({
  reducer: {
    locations: locationReducer,
  },
});

export default store;
