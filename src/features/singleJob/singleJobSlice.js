import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  job: {},
};

export const asyncGetSingleJob = createAsyncThunk(
  "job/singleJob",
  async (id) => {
    const res = await fetch(`http://localhost:3000/jobs/${id}`);
    const data = await res.json();
    return data;
  }
);

const singleJobSlice = createSlice({
  name: "singleJob",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(asyncGetSingleJob.pending, (state) => {
        state.error = "";
        state.isError = false;
        state.isLoading = true;
        state.job = {}
      })
      .addCase(asyncGetSingleJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.job = action.payload;
      })
      .addCase(asyncGetSingleJob.rejected, (state) => {
        state.isError = false;
        state.job = {};
        state.error = "Error occurred while getting single data";
      });
  },
});

export default singleJobSlice.reducer;
