import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { WishList } from './models/WishList';
import { onSnapshot, getSnapshot } from 'mobx-state-tree';
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
// if (localStorage.getItem('wishlistapp')) {
// 	const json = JSON.parse(localStorage.getItem('wishlistapp'));
// 	if (WishList.is(json)) initialState = json;
// }
let wishList = WishList.create(initialState);
// onSnapshot(wishList, snapshot => {
// 	localStorage.setItem('wishlistapp', JSON.stringify(snapshot));
// });
function renderApp() {
	ReactDOM.render(<App wishList={wishList} />, document.getElementById('root'));
}

renderApp();

if (module.hot) {
	module.hot.accept(['./components/App'], () => {
		renderApp();
	});
	module.hot.accept(['./components/App'], () => {
		const snapshot = getSnapshot(wishList);
		wishList = wishList.create(snapshot);
		renderApp();
	});
}
