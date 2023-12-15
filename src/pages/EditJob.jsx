import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncGetSingleJob } from "../features/singleJob/singleJobSlice";
import { asyncEditJob } from "../features/editJob/editJobSlice";
import { Helmet } from "react-helmet-async";

const EditJob = () => {
  const dispatch = useDispatch();
  const { job } = useSelector((state) => state.singleJob);
  const { id } = useParams();

  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    // Fetch job details when the component mounts or when the id changes
    dispatch(asyncGetSingleJob(id));
  }, [id, dispatch]);

  useEffect(() => {
    // Update local state when the job details are available
    if (job) {
      setJobTitle(job.title || "");
      setJobType(job.type || "");
      setSalary(job.salary || "");
      setDate(job.deadline || "");
    }
  }, [job]);

  const jobTitles = [
    "Redux Developer",
    "Full Stack Developer",
    "Android App Developer",
    "Social Media Manager",
    "Product Manager",
    "QA Engineer",
    "DevOps Engineer",
  ];
  const jobTypes = ["fullTime", "remote", "internship"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      title: jobTitle,
      type: jobType,
      salary,
      deadline: date,
    });
    const body = {
      title: jobTitle,
      type: jobType,
      salary,
      deadline: date,
    }
    dispatch(asyncEditJob({id,body}))
  };

  return (
    <div className=" mx-auto mt-8">
                   <Helmet>
        <title>Jobs | Update</title>
      </Helmet>
   
    <h1 className="text-center font-extrabold md:text-4xl text-white my-10 text-2xl">
      Update Your Job
    </h1>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col  gap-4 md:items-center mx-auto bg-transparent md:p-8 p-2   rounded shadow-md  text-sm"
    >
      <div className="flex  items-center justify-between  md:w-[600px]">
      <label className=" mb-2 text-white md:block hidden">Job Title</label>
        <label className="block mb-2 text-white md:hidden"> Title</label>
        <select
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="md:w-[500px] p-2 w-[200px] rounded bg-[#334155]"
          required
         
        >
          <option  disabled>
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

      <div className="flex  items-center justify-between  md:w-[600px]">
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

      <button type="submit" className="btn btn-primary mt-2 md:w-2/12  w-5/12 mx-auto mb-10 btn-sm md:btn-md"  data-aos="fade-up">
        Update
      </button>
    </form>
  </div>
  )
};

export default EditJob;
