import React from "react";
import { Search } from "./components/Search";
import { Pictures } from "./components/Pictures";
import { ContextProvider } from "./context/PicturesContext";

function App() {
	return (
		<main className="min-h-screen bg-gray-200">
			<ContextProvider>
				<Search />
				<Pictures />
			</ContextProvider>
		</main>
	);
}

export default App;
