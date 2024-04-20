"use client"
import React from 'react'
import { useLogoutFunction } from "@propelauth/nextjs/client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function Sigout() {
    const logoutFn = useLogoutFunction()
    const router = useRouter();
  return (
    <button class="bg-white text-blue-950 py-2 px-4 rounded-lg hover:bg-blue-200 transition duration-300" onClick={() => {logoutFn(true);router.push('/')}}>
         Sign Out
    </button> 
  )
}

export default Sigout