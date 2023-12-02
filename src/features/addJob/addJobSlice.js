import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  addedJob: {},
}

export const asyncAddJob = createAsyncThunk("addJob", async (body) => {

  const res = await fetch(`http://localhost:3000/jobs`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
  const postedJob = await res.json()
  return postedJob
})

const addJobSlice = createSlice({
  name: "add",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(asyncAddJob.pending, (state) => {
        ;(state.error = ""), (state.isError = false), (state.isLoading = true)
      })
      .addCase(asyncAddJob.fulfilled, (state, action) => {
        ;(state.isLoading = false), (state.addedJob = action.payload)
      })
      .addCase(asyncAddJob.rejected, (state) => {
        ;(state.isError = true),
          (state.addedJob = {}),
          (state.isLoading = false),
          (state.error = "error occurred to  fetching data")
      })
  },
})
export default addJobSlice.reducer