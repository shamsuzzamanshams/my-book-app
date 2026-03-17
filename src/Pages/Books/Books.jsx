import React, { useEffect, useState } from 'react';

const Books = () => {

	const [allBooks, setAllBooks] = useState([])
	useEffect(() => {
		fetch("booksData.json")
			.then(res => res.json())
			.then(data => {
				// console.log(data);
				setAllBooks(data);

			})
	}, [])
	return (
		<div>
			<h3>All Books</h3>
		</div>
	);
};

export default Books;