// Redux slice (machinesSlice.js)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  machines: [],
};

export const fetchMachine = createAsyncThunk(
  'machines/fetchMachine',
  async () => {
    const response = await axios.get(`https://wrk.acronex.com/api/challenge/machines/`);
    return response.data;
  }
);

const machinesSlice = createSlice({
  name: 'machines',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMachine.pending, (state) => {

      })
      .addCase(fetchMachine.fulfilled, (state, action) => {

        state.machines = action.payload;
      })
      .addCase(fetchMachine.rejected, (state, action) => {
  
      
      });
  },
});

export default machinesSlice.reducer;
