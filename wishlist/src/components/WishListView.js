import React from 'react';
import WishListItemView from './WishListItemView';
import { observer } from 'mobx-react';
const WishListView = ({ wishList }) => (
	<div>
		<ul>
			{wishList.items.map((item, idx) => (
				<WishListItemView key={idx} item={item} />
			))}
			Total: ${wishList.totalPrice}
		</ul>
	</div>
);

export default observer(WishListView);
