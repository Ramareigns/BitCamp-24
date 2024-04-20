import Navbar from '../nav';

export default function Main() {
    return (
        <div className="flex flex-col bg-white items-center justify-center h-screen ">
            <Navbar />
            <h1 class="text-black text-6xl">
                Hello World
            </h1>
        </div>
    );
}
