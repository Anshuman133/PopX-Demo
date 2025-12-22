import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
     <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md h-screen bg-gray-100 flex flex-col justify-end relative overflow-hidden">
        <div className="mx-5 mb-7 space-y-3">
        <h1 className="font-bold text-2xl">Welcome to PopX</h1>
        <p className="text-gray-600 text-base">Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit.</p>
        
        <div className="flex flex-col  space-y-3 font-semibold mt-10">
        <Link  to="/create-account">
        <button className="bg-[#6c25ff] cursor-pointer w-full hover:bg-violet-500 text-white rounded-md py-3  ">Create Account</button>
        </Link>
        <Link to="login">
        <button className="bg-[#6c25ff4b] cursor-pointer w-full hover:bg-violet-200   rounded-md py-3">Already Registered? Login</button>
        </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home;