import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import UserDetails from "./Pages/UserDetails/UserDetails";
import Users from "./Pages/Users/Users";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/userDetails/:id" component={UserDetails} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
