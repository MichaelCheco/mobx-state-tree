import React, { Component } from 'react';
import WishListView from './WishListView';

class App extends Component {
	state = {
		selectedUser: null,
	};
	render() {
		const { group } = this.props;
		const selectedUser = group.users.get(this.state.selectedUser);
		return (
			<>
				<header className="App">
					<h1>MobX WishList</h1>
				</header>
				<select onChange={this.onSelectUser}>
					<option> - Select User -</option>
					{Array.from(group.users.values()).map(user => (
						<option key={user.id} value={user.id}>
							{user.name}
						</option>
					))}
				</select>
				{selectedUser && <WishListView wishList={selectedUser.wishList} />}
			</>
		);
	}
	onSelectUser = e => {
		this.setState({ selectedUser: e.target.value });
	};
}

export default App;
