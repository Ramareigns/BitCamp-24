import Image from "next/image";

export default function Login({  }) {
  
  return (
    <main class="flex bg-white min-h-screen flex-col items-center justify-center p-24">
    <div id="container" class="bg-blue-500 w-full h-500 rounded-lg shadow-2xl flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        
        <div id="loginSide" class="w-full lg:w-1/2 flex flex-col p-10 items-center justify-center">
            <h1 class="text-3xl font-bold text-white mb-4 text-center">Login</h1>
            <form class="flex flex-col items-center">
                <input type="email" placeholder="Email" class="border-b-2 border-white focus:outline-none focus:border-blue-200 mb-4 text-white bg-white placeholder-gray-300 w-full lg:w-auto px-2 py-1 rounded-md" />
                <input type="password" placeholder="Password" class="border-b-2 border-white focus:outline-none focus:border-blue-200 mb-8 text-white bg-white placeholder-gray-300 w-full lg:w-auto px-2 py-1 rounded-md" />
                <button id="signUpButton" class="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-300">Sign In</button>
            </form>
        </div>
       
        <div id="pictureSide" class="relative bg-white rounded-r-lg hidden lg:block w-full h-full">
            <div class="w-full h-full rounded-r-lg overflow-hidden opacity-30">
                <img src="/House.jpg" alt="Image" class="w-full h-full object-cover" />
            </div>
            <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
                <h1 class="text-black font-bold text-4xl mb-6">Welcome Back</h1>
                <p class="text-black mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget urna justo.</p>
                <p class="text-black mb-6">Don't Have a Account?</p>
                <a href="Register" class="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-300">
                    Sign Up
                </a>
                
            </div>
        </div>
    </div>
</main>
  );
}
