import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utilitis/addToDb';
import Book from '../Book/Book';

const ReadList = () => {

	const [myReadList, setMyReadList] = useState([]);
	const [sort, setSort] = useState("");

	const data = useLoaderData();
	// console.log(data);

	useEffect(() => {
		const storeBookData = getStoredBook();
		const convertedStoredBookId = storeBookData.map(id => parseInt(id))
		const myReadList = data.filter(book => convertedStoredBookId.includes(book.bookId))
		setMyReadList(myReadList);



	}, [])


	const handleSort = (type) => {
		setSort(type);
		if (type === "pages") {
			const sortByPages = [...myReadList].sort((a, b) => a.totalPages - b.totalPages);
			setMyReadList(sortByPages);
		}
		if (type === "rating") {
			const sortByRating = [...myReadList].sort((a, b) => a.rating - b.rating);
			setMyReadList(sortByRating);
		}
	}

	return (
		<div>
			<details className="dropdown">
				<summary className="btn m-1">Sort By: {sort ? sort : ""}</summary>
				<ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
					<li><a onClick={() => handleSort("pages")}>Pages</a></li>
					<li><a onClick={() => handleSort("rating")}>Rating</a></li>
				</ul>
			</details>
			<Tabs>
				<TabList>
					<Tab>Read Book List</Tab>
					<Tab>My Wish List</Tab>
				</TabList>

				<TabPanel>
					<h2>Book I Read</h2>
					{
						myReadList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
					}
				</TabPanel>
				<TabPanel>
					<h2>My Wish List</h2>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default ReadList;