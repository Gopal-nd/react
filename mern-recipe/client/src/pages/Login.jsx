import { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: ''
      });
      const [_,setCookies] = useCookies(["access_token"])
    
    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //       ...formData,
    //       [name]: value
    //     });
    //   };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
    try {
        const newlogin = await axios.post('http://localhost:3001/auth/login',{username:formData.username,password:formData.password});


        console.log(newlogin)

        console.log(newlogin.data.token)
        console.log(newlogin.data.userID)
        setCookies('access_token',newlogin.data.token)
        window.localStorage.setItem("userID",newlogin.data.userID)
        toast.success("login sucessful")
        navigate('/')
        // toast.success('Successfully toasted!')
        
    } catch (error) {
      toast.error("username and password not registered")
      console.log(error)
        // toast.error(error)
    }
      // You can send the form data to your backend here
        // You can also add validation logic here before sending the data
      };
    
      return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl text-black font-semibold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={(e)=>setFormData({...formData,username:e.target.value})}
                className="mt-1 px-4 py-2 text-black  w-full border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={(e)=>setFormData({...formData,password:e.target.value})}
                className="mt-1 px-4 py-2 text-black  w-full border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
          </form>
          <Link to={'/register'}>
          <h2 className='mt-2 text-black '>Not have an Account <span className='text-blue-500'>Register</span></h2>
          </Link>
        </div>
      );
}

export default Login