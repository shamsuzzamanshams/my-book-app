import React, { Suspense } from 'react';

import Book from '../Book/Book';

const Books = ({ data }) => {

	// const [allBooks, setAllBooks] = useState([])
	// useEffect(() => {
	// 	fetch("booksData.json")
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			// console.log(data);
	// 			setAllBooks(data);

	// 		})
	// }, [])
	return (
		<div>
			<h3 className='text-3xl text-center p-6'>All Books</h3>
			<Suspense fallback={<span>loading............</span>}>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{
						data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
					}
				</div>
			</Suspense>
		</div>
	);
};

export default Books;