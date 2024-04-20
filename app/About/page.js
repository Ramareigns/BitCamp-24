import Navbar from '../nav';

export default function About() {
    return (
        <div className="flex flex-col bg-white items-center justify-center h-screen ">
            <Navbar />
            <h1 class="text-black text-6xl font-bold p-10">
                About
            </h1>
            <div className="shadow-2xl bg-gray-200 rounded-xl w-1/3  flex items-center justify-center mb-10">
                {/* Profile picture */}
                <img src="House2.jpg" alt="Profile" className="rounded-xl w-full h-full" />
            </div>
            <div className="max-w-2xl">
                <p class="flex items-center justify-center text-center text-black text-xl">
                ProjectFM website is a pioneering initiative harnessing API data from Fannie Mae to construct an insightful dashboard intertwining housing and climate change data. 
                This innovative fusion empowers users to make informed decisions about their ideal living locations based on comprehensive analysis. Leveraging PropelAuth, our website
                ensures secure user authentication and seamless data management,enriching the user experience while safeguarding their personal information.
                </p>
            </div>
        </div>
    );
}