import './App.css';
import Navbar from "./components/Navbar";
import User from "./components/User";

function App() {

    return (
        <div className="container">
            <Navbar title="User App Title"></Navbar>

            <hr/>
            <User
                name="Mustafa Sipahi"
                salary = "5000"
                department = "Bilişim"
            />
            <User
                name="Galip Sipahi"
                salary = "4000"
                department = "Muhendis"
            />
        </div>
    );
}

export default App;
