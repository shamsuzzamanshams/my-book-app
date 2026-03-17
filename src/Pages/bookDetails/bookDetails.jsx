import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const bookDetails = () => {
	const { id } = useParams();
	const bookid = parseInt(id);
	const data = useLoaderData();
	const singleBook = data.find(book => book.bookId === bookid);
	// console.log(singleBook);

	const { bookName, image } = singleBook;

	return (
		<div className='w-2/3 mx-auto'>
			<img className='w-48' src={image} alt="" />
			<h5>{bookName}</h5>

			<button className="btn btn-info m-2">Info</button>
			<button className="btn btn-success m-2">Success</button>
		</div>
	);
};

export default bookDetails;