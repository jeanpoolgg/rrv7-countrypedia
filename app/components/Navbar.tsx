import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <div className="w-full px-8 text-gray-700 bg-white shadow-sm">
        <div className="container flex flex-col md:flex-row items-center py-5 justify-center mx-auto" >
            <div className="flex flex-col md:flex-row items-center" >
                <NavLink to="/" className="flex items-center mb-5 md:mb-0" >
                    <span className="text-xl font-black text-gray-900 select-none" >
                        Country<span className="text-cyan-600" >Pedia</span>
                    </span>
                </NavLink>
                <nav className="flex flex-wrap items-center ml-0 md:ml-8 md:border-l md:pl-8" >
                    <NavLink to="/" end className="mr-5 font-medium text-gray-600 hover:text-gray-900">Home</NavLink>
                    <NavLink to="/countries" className="mr-5 font-medium text-gray-600 hover:text-gray-900" >Countries</NavLink>
                    <NavLink to="/about" className="mr-5 font-medium text-gray-600 hover:text-gray-900">About</NavLink>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar