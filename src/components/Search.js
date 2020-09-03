import React, { useState, useContext } from "react";
import { useQuery } from "react-query";
import { PicturesContext } from "../context/PicturesContext";

const api_key = process.env.REACT_APP_API_KEY;
console.log(api_key);
const fetchPictures = async (pictures, text) => {
	const result = await fetch(
		`https://pixabay.com/api/?key=${api_key}&q=${text}&image_type=photo`
	);

	return await result.json();
};

export const Search = () => {
	const [text, setText] = useState("");
	const { isLoading, data, error, refetch, isIdle } = useQuery(
		["pictures", text],
		fetchPictures,
		{ enabled: false }
	);
	const { setPictures } = useContext(PicturesContext);
	if (!isIdle && !isLoading) {
		const result = data.hits;
		setPictures(result);
	}

	return (
		<div>
			<input
				className="bg-white focus:outline-none focus:shadow-outline 
        border border-gray-300 rounded-lg py-2 px-4 block w-7/12 appearance-none leading-normal mx-auto mt-10 z-20"
				type="text"
				value={text}
				placeholder="search..."
				onChange={(e) => setText(e.target.value)}
			/>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={() => refetch()}
			>
				Search
			</button>
			{error && <p> {error.message}</p>}
		</div>
	);
};
