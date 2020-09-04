import React, { useState, useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { PicturesContext } from "../context/PicturesContext";

const api_key = process.env.REACT_APP_API_KEY;

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

	useEffect(() => {
		if (!isIdle && !isLoading) setPictures(data.hits);
	}, [isLoading]);

	return (
		<section className="pt-10" relative>
			<div className="md:flex justify-center">
				<input
					className="bg-white focus:outline-none focus:shadow-outline 
        border border-gray-300 rounded-lg py-2 px-4 block w-7/12 appearance-none leading-normal relative"
					type="text"
					value={text}
					placeholder="search..."
					onChange={(e) => setText(e.target.value)}
				/>
				<button
					className="block relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10 "
					onClick={() => refetch()}
				>
					Search
				</button>
				{error && <p> {error.message}</p>}
			</div>
		</section>
	);
};
