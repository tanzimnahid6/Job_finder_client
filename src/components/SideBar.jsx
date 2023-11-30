import { BsBagCheckFill } from "react-icons/bs"
import { BsClipboardPlus } from "react-icons/bs"
import Internship from "../UI/Internship"
import FullTime from "../UI/FullTime"
import Remote from "../UI/Remote"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div>
      <div className="cursor-pointer">
        <Link to={"/"}>
          <div className="flex items-center hover:text-white text-blue-400">
            <span>
              <BsBagCheckFill />
            </span>
            <h1 className=" font-semibold ">All Available Jobs </h1>
          </div>
        </Link>
        <div className="flex flex-col pl-5 gap-2 mt-2 text-gray-400 ">
          <div>
            <Internship></Internship>
          </div>
          <div>
            <FullTime></FullTime>
          </div>
          <div>
            <Remote></Remote>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-2 gap-2 text-gray-400 hover:text-white cursor-pointer">
        <span>
          <BsClipboardPlus />
        </span>
        <Link to={"/addJob"}>
          <h1>Add New Job</h1>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
