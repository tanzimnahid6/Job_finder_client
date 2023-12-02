import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"

import Body from "../components/Body"
import AddJob from "../pages/AddJob"
import EditJob from "../pages/EditJob"

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <h1>Error occurred when routing</h1>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/addJob",
        element: <AddJob></AddJob>,
      },
      {
        path: "/editJob/:id",
        element: <EditJob></EditJob>,
      },
    ],
  },
])

export default route
