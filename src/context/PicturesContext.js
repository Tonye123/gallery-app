import React, { createContext, useState } from "react";

export const PicturesContext = createContext();

export const ContextProvider = ({ children }) => {
	const [pictures, setPictures] = useState([]);
	return (
		<PicturesContext.Provider value={{ pictures, setPictures }}>
			{children}
		</PicturesContext.Provider>
	);
};
