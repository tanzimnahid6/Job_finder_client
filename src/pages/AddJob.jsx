import { useState } from "react"
import { useDispatch } from "react-redux"
import { asyncAddJob } from "../features/addJob/addJobSlice"
import { Helmet } from "react-helmet-async"

const AddJob = () => {
  const dispatch = useDispatch()
  const [jobTitle, setJobTitle] = useState("")
  const [jobType, setJobType] = useState("")
  const [salary, setSalary] = useState("")
  const [date, setDate] = useState("")

  const jobTitles = [
    "Redux Developer",
    "Full Stack Developer",
    "Android App Developer",
    "Social Media Manager",
    "Product Manager",
    "QA Engineer",
    "DevOps Engineer"
  ]
  const jobTypes = ["fullTime", "remote", "Internship"]

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(asyncAddJob({ title:jobTitle, type:jobType, salary, deadline:date }))
  }

  return (
    <div className=" mx-auto mt-8">
                      <Helmet>
        <title>Jobs |Add</title>
      </Helmet>
      <h1 className="text-center font-extrabold md:text-4xl text-white my-10 text-2xl">
        Add New Job
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  gap-4 md:items-center mx-auto bg-transparent md:p-8 p-2   rounded shadow-md  text-sm"
      >
        <div className="flex  items-center justify-between  md:w-[600px] ">
          <label className=" mb-2 text-white md:block hidden">Job Title</label>
          <label className="block mb-2 text-white md:hidden"> Title</label>
          <select
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="md:w-[500px] p-2 w-[200px] rounded bg-[#334155]"
            required
          >
            <option value="" disabled>
              Select Job Title
            </option>
            {jobTitles.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex  items-center justify-between  md:w-[600px]">
          <label className=" mb-2 text-white md:block hidden">Job Type</label>
          <label className=" mb-2 text-white block md:hidden"> Type</label>
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="md:w-[500px] p-2 w-[200px] rounded bg-[#334155]"
            required
          >
            <option value="" disabled>
              Select Job Type
            </option>
            {jobTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex  items-center justify-between  md:w-[600px] ">
          <label className="block mb-2 text-white">Salary</label>
          
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="md:w-[500px] w-[200px] p-2 rounded bg-[#334155]"
            required
          />
        </div>
        <div className="flex  items-center justify-between  md:w-[600px] ">
          <label className="block mb-2 text-white">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="md:w-[500px] p-2 w-[200px] rounded bg-[#334155]"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2 md:w-2/12  w-5/12 mx-auto mb-10"  data-aos="fade-up">
          Add Job
        </button>
      </form>
    </div>
  )
}

export default AddJob
