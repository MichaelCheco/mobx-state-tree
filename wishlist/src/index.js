import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { WishList } from './models/WishList';
const wishList = WishList.create({
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
});
ReactDOM.render(<App wishList={wishList} />, document.getElementById('root'));
