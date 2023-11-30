import Search from "../UI/Search"
import Sort from "../UI/Sort"
import JobCard from "./JobCard"

const Body = () => {
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
      <div>
        <JobCard></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard>

      </div>
    </div>
  )
}

export default Body
