import Image from "next/image";

export default function Home({  }) {
  
  return (
    <main class="flex bg-white min-h-screen flex-col items-center justify-center p-24">
    <h1 class="text-black">What Would you like</h1>
    <a href="Login" class="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-300">
        Log In
    </a>
    <a href="Register" class="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-300">
        Sign Up
    </a>
    
</main>
  );
}
