import {Camera} from 'lucide-react';

const Profile = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen ">
      <div className="md:w-[370px]  w-[440px] md:h-[785px] h-[935px] bg-gray-100 ">
        <h1 className=" px-5 pt-8 pb-3 text-xl  bg-white text-gray-900 ">
              Account Settings
           </h1>
        <div className="p-8 border-b border-dashed border-gray-400">
          <div className="flex items-start gap-6 mb-6">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
                alt="Profile" 
                className="w-20 h-20 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-purple-600 text-white rounded-full p-2 hover:bg-purple-700 transition-colors">
                <Camera size={10} />
              </button>
            </div>
            
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900">Marry Doe</h2>
              <p className="text-gray-600">Marry@Gmail.Com</p>
            </div>
          </div>
          
          <p className="text-gray-700 text-sm pb-6 ">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
        
        
      </div>
    </div>
  )
}

export default Profile;