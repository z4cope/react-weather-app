import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLocations } from '../../apis/locations';

const initialState = {
  loading: false,
  locationsArr: [],
  error: '',
};

export const getLocations = createAsyncThunk(
  'locations/getLocations',
  async () => {
    const locations = await fetchLocations();
    return locations;
  }
);

const locationsSLice = createSlice({
  name: 'locations',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getLocations.pending, (stateData) => {
      const state = stateData;
      state.loading = true;
      state.locationsArr = [];
      state.error = '';
    });
    builder.addCase(getLocations.fulfilled, (stateData, action) => {
      const state = stateData;
      state.loading = false;
      state.locationsArr = action.payload;
      state.error = '';
    });
    builder.addCase(getLocations.rejected, (stateData, action) => {
      const state = stateData;
      state.loading = false;
      state.locationsArr = [];
      state.error = action.error.message;
    });
  },
});

export default locationsSLice.reducer;
