import React from "react";
import { connect } from "react-redux";
import UserList from "./UserList";

import { fetchUsers } from "../Actions/userActions";

//@connect((store) => {
//	return {
//		users: store.users.users,
//	}
//})

const App = React.createClass({
	componentWillMount(){
		this.props.dispatch(fetchUsers());
	},

	render(){
		console.log(`USERS ::: ${this.props.users}`);
		return (
			<div>
			App Component
		<UserList users = { this.props.users } />
	</div>
	)
	}
});

function mapStateToProps(store) {
	return {
		users:store.users.users
	};
}

export default connect(mapStateToProps)(App)