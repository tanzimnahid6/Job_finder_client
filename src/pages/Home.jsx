import { Outlet } from "react-router-dom"

import Navbar from "../components/Navbar"
import SideBar from "../components/SideBar"

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-8 md:px-20 flex ">
        <div className="w-2/12">
          <SideBar></SideBar>
        </div>
        <div className="w-10/12 bg-[#1E293B] rounded-md">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default Home
