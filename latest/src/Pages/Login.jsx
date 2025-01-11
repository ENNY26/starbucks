import React from 'react'
import pwd from '../assets/Icons/pwd.svg'
const Login = ()=> {
  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <div className="flex items-center border border-gray-300 rounded-md">
            <span className="px-3 text-gray-500">
              <img src="" alt="" />
            </span>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-md"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <div className="flex items-center border border-gray-300 rounded-md">
            <span className="px-3 text-gray-500">
            <img src={pwd} alt="" className='max-w-5'/>            </span>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-md"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  </div>
  )
}

export default Login