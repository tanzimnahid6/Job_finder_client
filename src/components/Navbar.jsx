import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 md:px-20 my-4  py-1  border-b-2 pb-2">
      <Link to={"/"}>
        <div>
          <span>
            <img src="./logo.png" className="w-28" alt="" />
          </span>
        </div>
      </Link>
      <div className="flex  gap-2">
        <span>
          <div className="btn btn-primary btn-md">Login</div>
        </span>
        <span>
          <div className="btn btn-secondary btn-md btn-outline">Sign In</div>
        </span>
      </div>
    </div>
  )
}

export default Navbar
