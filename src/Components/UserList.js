import React from "react";
import {connect} from "react-redux";
import User from "./User";

const UserList = React.createClass({
    render(){
        if(Object.getOwnPropertyNames(this.props.users).length === 0) {
            return (<div></div>)
        }
        const userNodes = this.props.users.map((user) => {
            return (
                    <User name={user.username} email={user.email} key={user.id}></User>
            )
        });
        return (
            <div>
            <h1>Users</h1>
            {userNodes}
            </div>
        )
    }
});

function mapStateToProps(store) {
    return {
        users:store.users.users
    };
}

export default connect(mapStateToProps)(UserList);