import {getUser} from "@propelauth/nextjs/server/app-router"; 
import Sigout from ".//sigout";

const user = await getUser()
export default function Nav() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div>Logo</div>
            <div class = "py-2 px-3">
                <a href="/Main" class="bg-white text-blue-500 py-2 px-4 mr-10 rounded-lg hover:bg-blue-100 transition duration-300">
                 Dashboard
                </a>
                <Sigout />
            </div>
        </div>
    </nav>
    );
}

