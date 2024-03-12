import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
  const nav = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: ''
      });
    
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
            const newRegister = await axios.post('http://localhost:3001/auth/register',{username:formData.username,password:formData.password});
            toast.success('Successfully toasted!')
            nav('/login')
        } catch (error) {
            toast.error("user alredy Exist")
            console.log(error)
        }
        console.log(formData); // You can send the form data to your backend here
        // You can also add validation logic here before sending the data
      };
    
      return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl text-black  font-semibold mb-6 text-center">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={(e)=>setFormData({...formData,username:e.target.value})}
                className="mt-1 text-black  px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
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
                className="mt-1 text-black  px-4 py-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Register
            </button>
          </form>
          <Link to={'/login'}>
          <h2 className='mt-2 text-black '>Have an Account <span className='text-blue-500'>Login</span></h2>
          </Link>
        </div>
      );
}

export default Register