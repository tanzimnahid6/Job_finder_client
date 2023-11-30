import { useState } from "react"

const EditJob = () => {
  const [jobTitle, setJobTitle] = useState("")
  const [jobType, setJobType] = useState("")
  const [salary, setSalary] = useState("")
  const [date, setDate] = useState("")

  const jobTitles = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "UX/UI Designer",
  ]
  const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"]

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can add logic here to handle form submission
    console.log("Form submitted:", { jobTitle, jobType, salary, date })
  }

  return (
    <div className=" mx-auto mt-8">
      <h1 className="text-center font-extrabold text-4xl text-white">
        Update Your Job
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center mx-auto bg-transparent p-8  rounded shadow-md"
      >
        <div className="flex  items-center justify-between  w-[600px]">
          <label className="block mb-2 text-white">Job Title</label>
          <select
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-[500px] p-2  rounded bg-[#334155]"
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
        <div className="flex  items-center justify-between  w-[600px]">
          <label className="block mb-2 text-white">Job Type</label>
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="w-[500px] p-2  rounded bg-[#334155]"
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

        <div className="flex  items-center justify-between  w-[600px]">
          <label className="block mb-2 text-white">Salary</label>
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-[500px] p-2  rounded bg-[#334155]"
            required
          />
        </div>
        <div className="flex  items-center justify-between  w-[600px]">
          <label className="block mb-2 text-white">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-[500px] p-2  rounded bg-[#334155]"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
           Update
        </button>
      </form>
    </div>
  )
}

export default EditJob
