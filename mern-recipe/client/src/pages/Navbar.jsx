import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from React Router
import { useCookies } from 'react-cookie'
import { ModeToggle } from '../components/mode-toggel';



function Navbar() {
    const navigate = useNavigate()
    const [cookies,setCookies] = useCookies(["access_token"])
  const [isOpen, setIsOpen] = useState(false);
const logout =()=>{
    setCookies("access_token",'')
    window.localStorage.removeItem('userID')
    navigate('/login')
}
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-lg font-bold"><Link to={'/'}>Recipe</Link></span>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="block text-gray-300 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          {cookies.access_token &&(
<>

          <Link to="/create" className="text-gray-300 hover:text-white">Create</Link>
          <Link to="/saved" className="text-gray-300 hover:text-white">Saved</Link>
</>
          
          )}
          {
            !cookies.access_token ?(<>

          <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
          <Link to="/register" className="text-gray-300 hover:text-white">Register</Link>
            </>):(
                <button className='px-4 py-2 bg-blue-600 text-white font-semibold' onClick={logout}>Logout</button>
            )
          }
         <ModeToggle/>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 gap-2">
        <Link to="/" className= " block text-gray-300 hover:text-white px-4 py-2">Home</Link>
        {cookies.access_token && (<>

          <Link to="/create" className= " block text-gray-300 hover:text-white px-4 py-2">Create</Link>
          <Link to="/saved" className="block text-gray-300 hover:text-white px-4 py-2">Saved</Link>
        </>)}
          {
            !cookies.access_token ?(<>

          <Link to="/login" className="block px-4 py-2 text-gray-300 hover:text-white">Login</Link>
          <Link to="/register" className="text-gray-300 hover:text-white block px-4 py-2 ">Register</Link>
            </>):(
                <button className='block px-4 py-2 bg-blue-600 text-white font-semibold' onClick={logout}>Logout</button>
            )
          }
          <p className='block px-4 py-2'>

          <ModeToggle/>
          </p>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
