import React, {Component} from 'react';
import User from "./User";

class Users extends Component {
    render() {
        const {users} = this.props
        return (
            <div>
                {
                    users.map(user => {
                        console.log(user)
                        return (
                            <User
                                key = {user.id}
                                name = {user.name}
                                salary = {user.salary}
                                depertment = {user.department}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default Users;