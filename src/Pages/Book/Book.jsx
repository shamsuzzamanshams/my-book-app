import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {

	// console.log(singleBook);
	const { bookId,bookName, image, category, rating, tags, yearOfPublishing, publisher } = singleBook

	return (
		<Link to={`bookDetails/${bookId}`}>
			<div className="card bg-base-100 w-96 shadow-sm border p-6">
				<figure className='p-6 bg-gray-100 w-2/3 mx-auto'>
					<img
						className='h-[166px]'
						src={image}
						alt="Books" />
				</figure>
				<div className="card-body">
					<div className='flex justify-center gap-10'>
						{
							tags.map(tag => <button>{tag}</button>)
						}
					</div>
					<h2 className="card-title">
						{bookName}
						<div className="badge badge-secondary">{yearOfPublishing}</div>
					</h2>
					<p>Book by: {publisher}</p>
					<div className='border-t-2 border-dashed mt-6 mb-4'></div>
					<div className="card-actions justify-end">
						<div className="badge badge-outline">{category}</div>
						<div className="badge badge-outline">{rating}<FaStarHalfAlt /></div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Book;