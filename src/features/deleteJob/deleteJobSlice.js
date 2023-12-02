import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  deletedJob: {},
}

export const asyncDeleteJob = createAsyncThunk("job/deleteJob", async (id) => {
  const res = await fetch(`http://localhost:3000/jobs/${id}`,{
    method:'DELETE'
  })
  const data = await res.json()
  return data
})


const deleteJobSlice = createSlice({
    name: "deleteJob",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(asyncDeleteJob.pending,(state)=>{
            state.error = '',
            state.isError = false ,
            state.isLoading = true

        })
        .addCase(asyncDeleteJob.fulfilled,(state,action)=>{
            state.isLoading = false,
            state.deletedJob = action.payload

        })
        .addCase(asyncDeleteJob.rejected,()=>{
            state.isError = false,
            state.deletedJob = {},
            state.error = 'error occurred to  deleting  data'
        })
    }
  
    
  })
  export default deleteJobSlice.reducer 