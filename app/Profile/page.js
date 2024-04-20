
import {getUser} from "@propelauth/nextjs/server/app-router"; 
import Sigout from "../sigout";
import Navbar from '../nav';

export default async function Profile() {

    const user = await getUser()

  console.log(user)
      
    return (
        <div className="flex flex-col bg-white items-center justify-center h-screen ">
            <Navbar />
            <div className="rounded-full shadow-2xl bg-gray-200 w-64 h-64 flex items-center justify-center mb-4">
                {/* Profile picture */}
                <img src="Beast.jpg" alt="Profile" className="rounded-full w-full h-full" />
            </div>
            {/* Email and full name */}
            {user && ( 
            <div className="p-10 text-center text-black">
                <p className="text-lg font-bold">{user.firstName} {user.lastName}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            )}
            <a href="" class="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-300">
                 Edit Profile
            </a>
        </div>
    );
}

