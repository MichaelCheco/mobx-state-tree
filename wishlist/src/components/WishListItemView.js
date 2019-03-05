import React, { Component } from 'react';
import { observer } from 'mobx-react';
import WishListItemEdit from './WishListItemEdit';
import { clone, applySnapshot, getSnapshot } from 'mobx-state-tree';

class WishListItemView extends Component {
	state = {
		isEditing: false,
	};
	render() {
		const { item } = this.props;
		return this.state.isEditing ? (
			this.renderEditable()
		) : (
			<li>
				{item.image && <img src={item.image} alt={item.name} />}
				<h3>{item.name}</h3>
				<span>${item.price}</span>
				<span>
					<button onClick={this.onToggleEdit} role="img">
						{'✏️'}
					</button>
					<button onClick={item.remove}>{'🙅'}</button>
				</span>
			</li>
		);
	}
	renderEditable() {
		return (
			<li>
				<WishListItemEdit item={this.state.clone} />
				<button onClick={this.onSaveEdit}>{'👍'}</button>
				<button onClick={this.onCancelEdit}>{'❌'}</button>
			</li>
		);
	}
	onCancelEdit = () => {
		this.setState({ isEditing: false });
	};
	onToggleEdit = () => {
		this.setState({ isEditing: true, clone: clone(this.props.item) });
	};
	onSaveEdit = () => {
		applySnapshot(this.props.item, getSnapshot(this.state.clone));
		this.setState({ isEditing: false, clone: null });
	};
}

export default observer(WishListItemView);
