import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import allJobReducer from "../features/allJobs/allJobSlice"
import filterReducer from "../features/filterJob/filterJobSlice"
import sortJobReducer from "../features/sortJob/sortJobSlice"
import deleteJobReducer from "../features/deleteJob/deleteJobSlice"
import editJobReducer from "../features/editJob/editJobSlice"
import singleJobReducer from "../features/singleJob/singleJobSlice"


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    jobs: allJobReducer,
    filter: filterReducer,
    sort: sortJobReducer,
    dJob: deleteJobReducer,
    editedJob: editJobReducer,
    singleJob:singleJobReducer
  },
})
