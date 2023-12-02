import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  sortBy: "default",
}
const sortJobSlice = createSlice({
  name: "sortJob",
  initialState,
  reducers: {
    sortJobBy: (state, action) => {
      state.sortBy = action.payload
    },
  },
})

export default sortJobSlice.reducer
export const { sortJobBy } = sortJobSlice.actions
