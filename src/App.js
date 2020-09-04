import React from "react";
import { Search } from "./components/Search";
import { Pictures } from "./components/Pictures";
import { ContextProvider } from "./context/PicturesContext";

function App() {
	return (
		<main className="min-h-screen bg-gray-100 relative overflow-x-hidden">
			<svg
				className="w-11/12 absolute opacity-25 bottom-0 negative-top-right"
				viewBox="0 0 200 200"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill="#A7F0BA"
					d="M32.7,-41.2C43.3,-30,53.6,-20.6,57.3,-8.8C60.9,3.1,57.9,17.4,52.6,33.9C47.3,50.4,39.6,69,26.3,75C13.1,81.1,-5.8,74.4,-24.8,67.7C-43.8,61,-62.9,54.2,-74.2,40.2C-85.5,26.1,-89,4.9,-86,-15.7C-83.1,-36.4,-73.7,-56.5,-58.3,-66.9C-42.8,-77.2,-21.4,-77.9,-5.2,-71.7C11,-65.5,22,-52.4,32.7,-41.2Z"
					transform="translate(100 100)"
				/>
			</svg>
			<ContextProvider>
				<Search />
				<Pictures />
			</ContextProvider>
		</main>
	);
}

export default App;
