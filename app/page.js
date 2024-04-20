"use client"
import Image from "next/image";
import { useLogoutFunction } from "@propelauth/nextjs/client";
import {useRedirectFunctions} from "@propelauth/nextjs/client"

export default function Home({  }) {
  const {
    redirectToLoginPage, 
    redirectToSignupPage, 
    redirectToAccountPage,
    redirectToOrgPage,
    redirectToCreateOrgPage,
} = useRedirectFunctions()
  const logoutFn = useLogoutFunction()
  return (
    <main className="relative bg-white min-h-screen flex flex-col items-center justify-center p-24">
    <div className="absolute inset-0" style={{ opacity: 0.5 }}>
      <Image
        src="/House.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="flex flex-col items-center justify-center p-24 z-10">
      <h1 className="text-black text-6xl mb-10">What Would you like</h1>
      <a
        onClick = {()=>redirectToLoginPage({
          postLoginRedirectPath: window.location.href,
      })}
        className="bg-white text-black cursor-pointer py-2 px-4 mb-5 rounded-lg hover:bg-blue-800 hover:text-white transition duration-300"
      >
        Log In
      </a>
      <a
        onClick = {()=>redirectToSignupPage({
          postLoginRedirectPath: window.location.href,
      })}
        className="bg-white text-black py-2 px-4 cursor-pointer rounded-lg hover:bg-blue-800 hover:text-white transition duration-300"
      >
        Sign Up
      </a>
    </div>
  </main>
  );
}
