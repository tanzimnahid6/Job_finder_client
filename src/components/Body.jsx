import { useDispatch, useSelector } from "react-redux"
import Search from "../UI/Search"
import Sort from "../UI/Sort"
import JobCard from "./JobCard"
import { useEffect } from "react"
import { asyncGetAllJob } from "../features/allJobs/allJobSlice"
import searchJobsByTitle from "../util/searchJob"
import Aos from "aos"
import "aos/dist/aos.css";

const Body = () => {
  const dispatch = useDispatch()
  const { jobs, isLoading } = useSelector((state) => state.jobs)
  const { filterTopic, searchTopic } = useSelector((state) => state.filter)
  const { deletedJob } = useSelector((state) => state.dJob)

  const { sortBy } = useSelector((state) => state.sort)
  //TODO:Need to implement sorting system...........................................pending !!!!
  useEffect(() => {
    dispatch(asyncGetAllJob())
  }, [dispatch,deletedJob])
  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration in milliseconds
      once: true, // Only animate once
    });
  }, []);
 
  let content
  if (isLoading) {
    content = <h1>Loading....</h1>
  } else if (jobs.length === 0) {
    content = <h1>There is no job</h1>
  } else if (jobs.length > 0 && filterTopic == "internship") {
    content = [...jobs]
      .filter((job) => job.type == "internship")
      .map((job) => <JobCard key={job.id} job={job}></JobCard>)
  } else if (jobs.length > 0 && filterTopic == "fullTime") {
    content = [...jobs]
      .filter((job) => job.type == "fullTime")
      .map((job) => <JobCard key={job.id} job={job}></JobCard>)
  } else if (jobs.length > 0 && filterTopic == "remote") {
    content = [...jobs]
      .filter((job) => job.type == "remote")
      .map((job) => <JobCard key={job.id} job={job}></JobCard>)
  } else if (jobs.length > 0 && searchTopic !== "") {
    const searchJob = searchJobsByTitle(jobs, searchTopic)
    content = searchJob.map((job) => <JobCard key={job.id} job={job}></JobCard>)
  } else {
    content = [...jobs].map((job) => <JobCard key={job.id} job={job}></JobCard>)
  }
  return (
    <div className="flex flex-col py-8 md:px-16 px-5  ">
      <div>
        <div className="flex-col-reverse gap-6 md:flex-row  flex justify-between items-center my-6">
          <h1 className="text-2xl md:text-4xl font-extrabold  text-white">
            All Available Jobs
          </h1>
          <div className="md:flex  md:gap-2 space-y-6 md:space-y-0 items-center ">
            <div className="md:w-1/2 w-full "data-aos="fade-up">
              <Search></Search>
            </div>
            <div className="md:w-1/2 w-full " data-aos="fade-up">
              <Sort></Sort>
            </div>
          </div>
        </div>
      </div>
      <div >{content}</div>
    </div>
  )
}

export default Body
