import { types } from 'mobx-state-tree';

export const WishListItem = types
	.model({
		name: types.string,
		price: types.number,
		// image: types.optional(types.string, "")
		image: '',
	})
	.actions(self => ({
		changeName(newName) {
			self.name = newName;
		},
		changePrice(newPrice) {
			self.price = newPrice;
		},
		changeImage(newImage) {
			self.image = newImage;
		},
	}));
// .actions(self => {
// 	function changeName(newName) {
// 		self.name = newName;
// 	}
// 	return {
// 		changeName,
// 	}

export const WishList = types
	.model({
		items: types.optional(types.array(WishListItem), []),
	})
	.actions(self => ({
		add(item) {
			self.items.push(item);
		},
	}))
	.views(self => ({
		get totalPrice() {
			return self.items.reduce((sum, entry) => sum + entry.price, 0);
		},
	}));
