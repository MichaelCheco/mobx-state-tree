import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { WishList } from './models/WishList';
import { onSnapshot } from 'mobx-state-tree';
let initialState = {
	items: [
		{
			name: 'Paper',
			price: 321.43,
			image: '',
		},
		{
			name: 'Rock',
			price: 31.23,
			image: '',
		},
	],
};
if (localStorage.getItem('wishlistapp')) {
	const json = JSON.parse(localStorage.getItem('wishlistapp'));
	if (WishList.is(json)) initialState = json;
}
const wishList = WishList.create(initialState);
onSnapshot(wishList, snapshot => {
	localStorage.setItem('wishlistapp', JSON.stringify(snapshot));
});
ReactDOM.render(<App wishList={wishList} />, document.getElementById('root'));
