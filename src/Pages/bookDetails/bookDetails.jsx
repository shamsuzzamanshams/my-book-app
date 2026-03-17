import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDb } from '../../Utilitis/addToDb';

const bookDetails = () => {
	const { id } = useParams();
	const bookid = parseInt(id);
	const data = useLoaderData();
	const singleBook = data.find(book => book.bookId === bookid);
	// console.log(singleBook);

	const { bookName, image } = singleBook;


	const handleMarkAsRead = id =>{
		addToStoreDb(id);
	}


	return (
		<div className='w-2/3 mx-auto'>
			<img className='w-48' src={image} alt="" />
			<h5>{bookName}</h5>

			<button onClick={() => handleMarkAsRead(id)} className="btn btn-info m-2">Mark as Read</button>
			<button className="btn btn-success m-2">Add to WishList</button>
		</div>
	);
};

export default bookDetails;