import { BsBagCheckFill } from "react-icons/bs"
import { BsClipboardPlus } from "react-icons/bs"
import Internship from "../UI/Internship"
import FullTime from "../UI/FullTime"
import Remote from "../UI/Remote"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addFilter } from "../features/filterJob/filterJobSlice"

const Sidebar = () => {
  const dispatch = useDispatch()
  const handleInternship = () => {
    dispatch(addFilter("internship"))
  }
  const handleFulltime = () => {
    dispatch(addFilter("fullTime"))
  }
  const handleRemote = () => {
    dispatch(addFilter("remote"))
  }
  const handleAllJob = () => {
    dispatch(addFilter(""))
  }
  return (
    <div className="flex items-start justify-between md:flex-col">
      <div className="cursor-pointer  flex-col flex text-sm md:text-xl">
        <Link to={"/"}>
          <div
            className="flex items-center hover:text-white text-blue-400"
            onClick={handleAllJob}
          >
            <span>
              <BsBagCheckFill />
            </span>
            <h1 className=" font-semibold ">All Available Jobs </h1>
          </div>
        </Link>
        <div className=" pl-5 gap-2 mt-2 text-gray-400 ">
          <div onClick={handleInternship} >
            <Internship></Internship>
          </div>
          <div onClick={handleFulltime}>
            <FullTime></FullTime>
          </div>
          <div onClick={handleRemote}>
            <Remote></Remote>
          </div>
        </div>
        <div>
       
        </div>

      </div>
      <div className="flex items-center md:mt-2 gap-2 text-gray-400 hover:text-white cursor-pointer text-sm md:text-xl">
        <span >
          <BsClipboardPlus />
        </span>
        <Link to={"/addJob"} >
          <h1>Add New Job</h1>
        </Link>
        

      </div>
    </div>
  )
}

export default Sidebar
