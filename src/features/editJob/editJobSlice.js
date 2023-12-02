import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  editedJob: {},
};

export const asyncEditJob = createAsyncThunk("job/editJob", async (details) => {
  const { id, body } = details;
  const res = await fetch(`http://localhost:3000/jobs/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await res.json();
  return data;
});

const editJobSlice = createSlice({
  name: "editJob",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(asyncEditJob.pending, (state) => {
        state.error = "";
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(asyncEditJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.editedJob = action.payload;
      })
      .addCase(asyncEditJob.rejected, (state) => {
        state.isError = false;
        state.editedJob = {};
        state.error = "Error occurred while editing data";
      });
  },
});

export default editJobSlice.reducer;
