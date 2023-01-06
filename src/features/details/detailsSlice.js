import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDetails } from '../../apis/details';

const initialState = {
  loading: false,
  detailsArr: {},
  error: '',
};

export const getDetails = createAsyncThunk(
  'details/getDetails',
  async ({ lat, lon }) => {
    const locations = await fetchDetails(lat, lon);
    return locations;
  }
);

const detailsSLice = createSlice({
  name: 'details',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (stateData) => {
      const state = stateData;
      state.loading = true;
      state.detailsArr = [];
      state.error = '';
    });
    builder.addCase(getDetails.fulfilled, (stateData, action) => {
      const state = stateData;
      state.loading = false;
      state.detailsArr = action.payload;
      state.error = '';
    });
    builder.addCase(getDetails.rejected, (stateData, action) => {
      const state = stateData;
      state.loading = false;
      state.detailsArr = [];
      state.error = action.error.message;
    });
  },
});

export default detailsSLice.reducer;
