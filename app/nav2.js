export default function Nav2() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-blue-950 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="w-16 h-16"> {/* Adjusted width and height */}
                <img src="Project.jpg" alt="Logo" className="rounded-full w-full h-full" />
            </div>
            <div class = "py-2 px-3">
                <a href="/" class="bg-white text-blue-950 py-2 px-4 mr-10 rounded-lg hover:bg-blue-200 transition duration-300">
                 LogIn
                </a>
            </div>
        </div>
    </nav>
    );
}

