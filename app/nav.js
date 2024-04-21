import Sigout from ".//sigout";

export default function Nav() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-blue-950 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="w-16 h-16"> {/* Adjusted width and height */}
                <img src="Project.jpg" alt="Logo" className="rounded-full w-full h-full" />
            </div>
            <div class = "py-2">
                <a href="/Main" class="bg-white text-blue-950 py-2 px-4 mr-10 rounded-lg hover:bg-blue-200 transition duration-300">
                 Dashboard
                </a>
                <a href="/About" class="bg-white text-blue-950 py-2 px-4 mr-10 rounded-lg hover:bg-blue-200 transition duration-300">
                 About
                </a>
                <a href="/Profile" class="bg-white text-blue-950 py-2 px-4 mr-10 rounded-lg hover:bg-blue-200 transition duration-300">
                 Profile
                </a>
                <Sigout />
            </div>
        </div>
    </nav>
    );
}

