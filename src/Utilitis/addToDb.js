const getStoredBook = () => {
	const storeBookSTR = localStorage.getItem("readlist");

	if (storeBookSTR) {
		const storeBookData = JSON.parse(storeBookSTR);
		return storeBookData;
	}

	else {
		return [];
	}
}

const addToStoreDb = (id) => {
	const storeBookData = getStoredBook();

	if(storeBookData.includes(id)){
		alert("This ID Already Exist");
	}
	else{

		storeBookData.push(id);
		const data = JSON.stringify(storeBookData);
		localStorage.setItem("readlist",data);
	}
}

export{addToStoreDb}