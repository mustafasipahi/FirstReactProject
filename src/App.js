import './App.css';
import Navbar from "./components/Navbar";
import {Component} from "react";
import Users from "./components/Users";

class App extends Component {

    render() {
        return (
            <div className="container">
                <Navbar title="User App Title"></Navbar>

                <hr/>
                <Users users={this.state.users}/>
            </div>
        );
    }
}

export default App;
