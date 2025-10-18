import { Link } from "react-router-dom";


const Login = () => {
  


  return (
    <div className=" flex justify-center items-center min-h-screen ">
      <div className="md:w-[370px]  w-[440px] md:h-[785px] h-[935px] bg-gray-100 ">
        <div className="mx-5 mt-11 space-y-5">
          <h1 className="text-3xl font-bold text-gray-900 ">
              Signin to your<br />PopX account
           </h1>
           <p className="text-[#676a6c] text-lg">Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.</p>
          <div className="space-y-6">
           <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-xs text-[#6c25ff]">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              className="w-full px-4 py-2   text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6c25ff]"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-gray-100 px-1 text-xs text-[#6c25ff]">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full px-4 py-2   text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6c25ff]"
            />
          </div>
          <Link to="/profile">
          <button
            className="w-full  bg-[#cbcbcb] hover:bg-indigo-300 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 "
          >
            Login
          </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;