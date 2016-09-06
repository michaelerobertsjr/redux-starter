import React from "react";
import {connect} from "react-redux";

export default class User extends React.Component {
    render(){
        return (
            <div>
            {this.props.name} - {this.props.email}
            </div>
    )
    }
}