import {  createSlice } from "@reduxjs/toolkit"

const initialState = {
  filterTopic: "",
}
const filterJobSlice = createSlice({
  name: "filterJob",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filterTopic = action.payload
    },
  },
})

export default filterJobSlice.reducer
export const { addFilter } = filterJobSlice.actions
