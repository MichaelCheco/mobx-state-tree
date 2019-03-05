import React, { Component } from 'react';
import { observer } from 'mobx-react';

class WishListItemEdit extends Component {
	render() {
		const { item } = this.props;
		return (
			<div>
				Thing: <input value={item.name} onChange={this.onNameChange} />
				Price: <input value={item.price} onChange={this.onPriceChange} />
				Image: <input value={item.image} onChange={this.onImageChange} />
			</div>
		);
	}
	onNameChange = e => {
		this.props.item.changeName(e.target.value);
	};
	onPriceChange = e => {
		const price = parseInt(e.target.value);
		if (!isNaN(price)) this.props.item.changePrice(price);
	};
	onImageChange = e => {
		this.props.item.changeImage(e.target.value);
	};
}

export default observer(WishListItemEdit);
