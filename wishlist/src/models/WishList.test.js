import { WishListItem, WishList } from './WishList';

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
	list.add(
		WishListItem.create({
			name: 'Musashi',
			price: 50.0,
		})
	);
	expect(list.items.length).toBe(1);
	expect(list.items[0].price).toBe(50.0);
	list.items[0].changeName('Essentialism');
	expect(list.items[0].name).toBe('Essentialism');
});
