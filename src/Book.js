import React from "react";
import { data } from "./data";

const Book = () => {
	return (
		<div>
			{data.map((dato) => {
				return (
					<div key={dato.Title}>
						<h1>{dato.Title}</h1>
						<p>{dato.Author}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Book;
