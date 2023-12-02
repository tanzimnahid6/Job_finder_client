import { useDispatch, useSelector } from "react-redux"
import Search from "../UI/Search"
import Sort from "../UI/Sort"
import JobCard from "./JobCard"
import { useEffect } from "react"
import { asyncGetAllJob } from "../features/allJobs/allJobSlice"
import searchJobsByTitle from "../util/searchJob"

const Body = () => {
  const dispatch = useDispatch()
  const { jobs, isLoading } = useSelector((state) => state.jobs)
  const { filterTopic, searchTopic } = useSelector((state) => state.filter)
  const { sortBy } = useSelector((state) => state.sort)
  //TODO:Need to implement sorting system...........................................pending !!!!
  useEffect(() => {
    dispatch(asyncGetAllJob())
  }, [dispatch])
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
    <div className="flex flex-col py-8 px-16">
      <div>
        <div className="flex justify-between items-center my-6">
          <h1 className="text-4xl font-extrabold  text-white">
            All Available Jobs
          </h1>
          <div className="md:flex  gap-2 items-center">
            <div>
              <Search></Search>
            </div>
            <div>
              <Sort></Sort>
            </div>
          </div>
        </div>
      </div>
      <div>{content}</div>
    </div>
  )
}

export default Body
