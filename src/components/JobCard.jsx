
import { FaEdit } from "react-icons/fa"
import { AiOutlineDelete } from "react-icons/ai"
import { Link } from "react-router-dom"
import FullTime from "../UI/FullTime"
const JobCard = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <div>
          <h1 className="text-lg font-bold">Back End Developer</h1>
          <div className="flex gap-4">
            <span>
              <FullTime></FullTime>
            </span>
            <span>BDT 4000</span>
            <span>Closing on 2022-12-31</span>
          </div>
        </div>

        <div className="flex gap-4 cursor-pointer">
          <span className="flex items-center bg-[#3B82F6] hover:bg-[#3b60a1] p-1 px-3 font-semibold rounded">
            <FaEdit />
            <Link to={'/editJob'}><span>Edit</span></Link>
          </span>
          <span className="flex items-center bg-[#EF4444] hover:bg-[#8e3535] p-1 px-3 font-semibold rounded">
            <AiOutlineDelete size={22} />
            <span>Delete</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default JobCard
