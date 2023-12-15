import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 md:px-20 my-4  py-1  border-b-2 pb-2 ">
      <Link to={"/"}>
        <div>
          <span>
            <img src="./logo.png" className="w-28" alt="" />
          </span>
        </div>
      </Link>
      <div className="flex  gap-2  navbar-end"  >
        <span className="lg:block hidden">
          <div className="btn btn-primary btn-md">Login</div>
        </span>
        <span className="lg:block hidden">
          <div className="btn btn-secondary btn-md btn-outline">Sign In</div>
        </span>
        <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-1 shadow bg-[#334155] rounded-md ">
        <li className="btn btn-primary btn-sm mb-2 p-0 "><a>Login</a></li>
        
        <li className="btn btn-secondary p-0 btn-sm btn-outline"><a >SignIn</a></li>
      </ul>
    </div>
      </div>
    </div>
  )
}

export default Navbar
