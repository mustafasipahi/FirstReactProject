import React, {Component} from 'react';

const UserContext = React.createContext(undefined);

class UserProvider extends Component {

    state = {
        users : [
            {
                id : 1,
                name : "Mustafa Sipahi",
                salary : "5000",
                department : "Bilişim",
            },
            {
                id : 2,
                name : "Galip Sipahi",
                salary : "4000",
                department : "Mühendis"
            },
            {
                id : 3,
                name : "Kadir Sipahi",
                salary : "6000",
                department : "Siber"
            }
        ]
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

const UserConsumer = UserContext.Consumer;

export default UserProvider;