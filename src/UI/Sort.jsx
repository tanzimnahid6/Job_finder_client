import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { sortJobBy } from "../features/sortJob/sortJobSlice"

const Sort = () => {
  const [sortValue, setSortValue] = useState("default")
  const dispatch = useDispatch()

  const handleSortChange = (event) => {
    const selectedSort = event.target.value
    setSortValue(selectedSort)
    dispatch(sortJobBy(selectedSort))
  }

  return (
    <select
      className="select select-bordered select-sm w-full rounded-md"
      value={sortValue}
      onChange={handleSortChange}
    >
      <option value="default">Default</option>
      <option value="lowToHigh">Salary (Low to High)</option>
      <option value="highToLow">Salary (High to Low)</option>
    </select>
  )
}

export default Sort
