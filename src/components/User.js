import React, {Component} from 'react';
import PropTypes from "prop-types";

class User extends Component {

    state = {
        isVisible : true
    }

    myOnClinkEvent = (e) => {
        this.setState({
            isVisible : !this.state.isVisible
        })
    }

    render() {
        const {name, department, salary} = this.props;
        const {isVisible} = this.state

        return (
            <div className = "col-md-7 mb-4">
                <div className = "card">
                    <div className = "card-header d-flex justify-content-between">
                        <h4 className = "d-inline" onClick={this.myOnClinkEvent}>{name}</h4>
                        <i className = "far fa-trash-alt" style = {{cursor:"pointer"}}></i>
                    </div>
                </div>
                {
                    isVisible ?
                        <div className = "card-body">
                            <p className = "card-text">Salary: {salary}</p>
                            <p className = "card-text">Department: {department}</p>
                        </div> : null
                }
            </div>
        );
    }
}
User.prototypes = {
    name : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired
}
export default User;