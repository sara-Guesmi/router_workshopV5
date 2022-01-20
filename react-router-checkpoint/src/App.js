import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Error from "./Components/Error";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users/:id" component={Users} />

        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
