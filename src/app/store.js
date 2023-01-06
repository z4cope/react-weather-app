import { configureStore } from '@reduxjs/toolkit';
import locationReducer from '../features/locations/locationSLice';
import detailsReducer from '../features/details/detailsSlice';

const store = configureStore({
  reducer: {
    locations: locationReducer,
    data: detailsReducer,
  },
});

export default store;
