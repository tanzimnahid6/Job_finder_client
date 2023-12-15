import { FaEdit } from "react-icons/fa"
import { AiOutlineDelete } from "react-icons/ai"
import { Link } from "react-router-dom"
import FullTime from "../UI/FullTime"
import Internship from "../UI/Internship"
import Remote from "../UI/Remote"
import { useDispatch } from "react-redux"
import { asyncDeleteJob } from "../features/deleteJob/deleteJobSlice"
import Swal from "sweetalert2"


const JobCard = ({ job }) => {
  const dispatch = useDispatch()
  const { title, deadline, salary, type, id } = job
  const handleJobDelete = (id) => {

    dispatch(asyncDeleteJob(id))
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: "Your job has been deleted",
      showConfirmButton: false,
      timer: 1500
    });
  }

  let typeOfJob
  if (job && type == "internship") {
    typeOfJob = <Internship></Internship>
  } else if (job && type == "fullTime") {
    typeOfJob = <FullTime></FullTime>
  } else if (job && type == "remote") {
    typeOfJob = <Remote></Remote>
  } else {
    typeOfJob = <h1>Job type unspecified</h1>
  }

 
 
  return (
    <div>
      <div className="flex md:flex-row flex-col md:justify-between md:items-center  border border-black rounded-md md:border-none my-10 drop-shadow-lg md:my-0 shadow-lg shadow-cyan-500/50 md:shadow-none px-4 md:px-0 py-8 md:py-4" >
        <div>
          <h1 className="text-lg font-bold">{title}</h1>
          <div className="flex-col flex md:flex-row gap-4 text-xs md:text-base my-5 md:my-0">
            <p className="flex gap-1"><span className="md:hidden inline">Type :</span>  {typeOfJob}</p>
            <div className="space-x-4">
            <span>Salary: $ {salary}</span>
            <span>Closing <span className="md:inline hidden">on</span> :{deadline}</span>
            </div>
          
          </div>
        </div>

        <div className="flex gap-4 cursor-pointer mx-auto md:mx-0">
        
          
            <Link to={`/editJob/${id}`}>
            <span className="flex items-center bg-[#3B82F6] hover:bg-[#3b60a1] p-1 px-3 font-semibold rounded text-bases md:text-lg"   >
            <FaEdit />
              <span className="md:block hidden">Edit</span>
              </span>
            </Link>
       
          <span
            className="flex items-center bg-[#EF4444] hover:bg-[#8e3535] p-1 px-3 font-semibold rounded text-base md:text-lg"   
            onClick={() => handleJobDelete(id)}
          >
            <AiOutlineDelete  />
            <span className="md:block hidden">Delete</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default JobCard
