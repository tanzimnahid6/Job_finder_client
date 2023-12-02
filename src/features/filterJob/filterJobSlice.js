import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filterTopic: "",
  searchTopic: "",
}
const filterJobSlice = createSlice({
  name: "filterJob",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filterTopic = action.payload
    },
    addSearch: (state, action) => {
      state.searchTopic = action.payload
    },
  },
})

export default filterJobSlice.reducer
export const { addFilter ,addSearch} = filterJobSlice.actions
