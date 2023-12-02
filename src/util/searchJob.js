function searchJobsByTitle(jobs,title) {
  const searchTerm = title.toLowerCase()
  const matchingJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm)
  )
  return matchingJobs
}
export default searchJobsByTitle
