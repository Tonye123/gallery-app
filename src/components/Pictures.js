import React, { useContext } from "react";
import { PicturesContext } from "../context/PicturesContext";

export const Pictures = () => {
	const { pictures } = useContext(PicturesContext);

	return (
		<div className="grid md:grid-cols-3 mx-10 mt-10 gap-8">
			{pictures.map((item) => (
				<div
					key={item.id}
					className="bg-gray-400 rounded w-auto shadow-md overflow-hidden"
				>
					<img
						className="object-contain"
						src={item.webformatURL}
						alt="bowl of curry"
					/>
					<div className="m-4">
						<span>
							<svg
								className=" inline-block w-5 b"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="#e53e3e"
							>
								<path
									fillRule="evenodd"
									d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
									clipRule="evenodd"
								/>
							</svg>
							{item.likes} Likes
						</span>
						<span className="block">By {item.user}</span>
					</div>
				</div>
			))}
		</div>
	);
};
