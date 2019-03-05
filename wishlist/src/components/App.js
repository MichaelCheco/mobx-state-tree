import React, { Component } from 'react';
import WishListView from './WishListView';

class App extends Component {
	render() {
		return (
			<>
				<header className="App">
					<h1>MobX WishList</h1>
				</header>
				<WishListView wishList={this.props.wishList} />
			</>
		);
	}
}

export default App;
