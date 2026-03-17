import React from 'react';
import bookimage from '../../assets/hero_img.jpg'

const Banner = () => {
	return (
		<div className='flex justify-between items-center border-2 m-6 rounded-2xl p-6'>
			<div className=''>
				<h1 className='font-bold text-6xl'>Books to freshen up your bookshelf</h1>
				<button className="btn btn-success mt-6 rounded-2xl items-center text-2xl text-white ">View The List</button>
			</div>
			<div className=''>
				<img src={bookimage} alt="" srcset="" />
			</div>
		</div>
	);
};

export default Banner;