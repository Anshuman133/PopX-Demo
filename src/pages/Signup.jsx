import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => { 
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Account created:', formData);
    
  };
  return (
    <div className=" flex justify-center items-center min-h-screen font- ">
      <div className="md:w-[370px]  w-[440px] md:h-[785px] h-[935px] bg-gray-100 ">
        <div className="mx-5 mt-11  space-y-3">
           <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Create your<br />PopX account
           </h1>
        
        <div className="space-y-6">
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-xs  text-[#6c25ff]">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full px-4 py-2 placeholder:text-black  text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-xs text-[#6c25ff]">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full px-4 py-2 placeholder:text-black  text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6c25ff]"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-xs text-[#6c25ff]">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full px-4 py-2 placeholder:text-black  text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6c25ff]"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-xs text-[#6c25ff]">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full px-4 py-2 placeholder:text-black  text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6c25ff]"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-xs text-[#6c25ff]">
              Company name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Marrlefty Doe"
              className="w-full px-4 py-2 placeholder:text-black  text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6c25ff]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">
              Are you an Agency?<span className='text-red-500'>*</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={handleChange}
                  className="w-5 h-5 text-[#6c25ff] border-gray-300 focus:text-[#6c25ff]"
                />
                <span className="ml-2 text-gray-900">Yes</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={handleChange}
                  className="w-5 h-5  text-[#6c25ff] border-gray-300 focus:text-[#6c25ff]"
                />
                <span className="ml-2 text-gray-900">No</span>
              </label>
            </div>
          </div>
          <Link to="/profile">
          <button
            onClick={handleSubmit}
            className="w-full  bg-[#6c25ff] hover:bg-indigo-300 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 mt-40"
          >
            Create Account
          </button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;