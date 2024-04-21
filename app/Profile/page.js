
"use client";

import {useUser} from "@propelauth/nextjs/client"; 
import Navbar from '../nav';
import {useRedirectFunctions} from "@propelauth/nextjs/client"

export default function Profile() {
    const {
        redirectToLoginPage, 
        redirectToSignupPage, 
        redirectToAccountPage,
        redirectToOrgPage,
        redirectToCreateOrgPage,
    } = useRedirectFunctions()

    const {loading, user} = useUser();
      
    return (
        <div className="flex flex-col bg-white items-center justify-center h-screen ">
            <h1 class="text-black text-6xl font-bold p-10">
                Profile
            </h1>
            <Navbar />
            
            
    {
        user && (
            <div className="rounded-full shadow-2xl bg-gray-200 w-64 h-64 flex items-center justify-center mb-4">
                <img src={user.pictureUrl} alt="Profile" className="rounded-full w-full h-full" />
            </div>
        )
    }
    {/* Close the opening <div> here */}
    {
        user && (
            <div className="p-10 text-center text-black">
                <p className="text-lg font-bold">{user.firstName} {user.lastName}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
            </div>
        )
    }  
            
            
            <a onClick = {()=>redirectToAccountPage({
          postLoginRedirectPath: window.location.href,
      })} class="bg-white text-blue-500 cursor-pointer  px-4 rounded-lg hover:bg-blue-100 transition duration-300">
                 Edit Profile
            </a>
        </div>
    );
}

