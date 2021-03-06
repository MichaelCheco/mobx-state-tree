import { WishListItem, WishList } from './WishList';
import { getSnapshot, onSnapshot, onPatch } from 'mobx-state-tree';
import { reaction } from 'mobx';
it('can create an instance of a model', () => {
	const item = WishListItem.create({
		name: 'War and Peace',
		price: 32.99,
		// image: '',
	});
	expect(item.image).toBe('');
	expect(item.price).toBe(32.99);
	item.changeName('Fahrenheit 451');
	expect(item.name).toBe('Fahrenheit 451');
});

it('can create a wishlist', () => {
	const list = WishList.create({
		items: [
			{
				name: 'War and Peace',
				price: 32.99,
			},
		],
	});
	expect(list.items.length).toBe(1);
	expect(list.items[0].price).toBe(32.99);
});

it('can add new items', () => {
	const list = WishList.create();
	const states = [];
	onSnapshot(list, snapshot => {
		states.push(snapshot);
	});
	list.add({
		name: 'Musashi',
		price: 50.0,
	});
	expect(list.items.length).toBe(1);
	expect(list.items[0].price).toBe(50.0);
	list.items[0].changeName('Essentialism');
	expect(list.items[0].name).toBe('Essentialism');

	expect(getSnapshot(list)).toMatchSnapshot();
	expect(states).toMatchSnapshot();
	// expect(getSnapshot(list)).toEqual({
	// 	items: [
	// 		{
	// 			name: 'Essentialism',
	// 			price: 50.0,
	// 			image: '',
	// 		},
	// 	],
	// });
});
it('can add new items -2', () => {
	const list = WishList.create();
	const patches = [];
	onPatch(list, patch => {
		patches.push(patch);
	});
	list.add({
		name: 'Musashi',
		price: 50.0,
	});
	list.items[0].changeName('Essentialism');

	expect(patches).toMatchSnapshot();
});
it('can calculate the total price of a wishlist', () => {
	const list = WishList.create({
		items: [
			{
				name: 'Paper',
				price: 9.3,
			},
			{
				name: 'Rock',
				price: 42.4,
			},
		],
	});
	expect(list.totalPrice).toBe(51.7);
	let changed = 0;
	reaction(() => list.totalPrice, () => changed++);
	expect(changed).toBe(0);
	console.log(list.totalPrice);
	list.items[0].changeName('Test');
	expect(changed).toBe(0);
	list.items[0].changePrice(10);
	expect(changed).toBe(1);
});
