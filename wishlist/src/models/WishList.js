import { types } from 'mobx-state-tree';

export const WishListItem = types
	.model({
		name: types.string,
		price: types.number,
		// image: types.optional(types.string, "")
		image: '',
	})
	.actions(self => {
		function changeName(newName) {
			self.name = newName;
		}
		return {
			changeName,
		};
	});

export const WishList = types.model({
	items: types.optional(types.array(WishListItem), []),
});
