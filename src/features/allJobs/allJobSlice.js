import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  jobs: [],
}

export const asyncGetAllJob = createAsyncThunk("job/getAllJobs", async () => {
  const res = await fetch("http://localhost:3000/jobs")
  const data = await res.json()
  return data
})

const allJobSlice = createSlice({
  name: "jobs",
  initialState,

  extraReducers:(builder)=>{
    builder
    .addCase(asyncGetAllJob.pending,(state)=>{
        state.error = '',
        state.isError = false ,
        state.isLoading = true
    })
    .addCase(asyncGetAllJob.fulfilled,(state,action)=>{
        state.isLoading = false,
        state.jobs = action.payload
    })
    .addCase(asyncGetAllJob.rejected,(state)=>{
        state.isError= true,
        state.jobs = [],
        state.isLoading= false,
        state.error = 'error occurred to  fetching data'

    })
  }
})
export default allJobSlice.reducer 

