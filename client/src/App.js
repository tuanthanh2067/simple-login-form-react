import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/login" render={() => <Login />} />
        <Route path="/signup" render={() => <Signup />} />
        <Route path="/">
          <Redirect to="login" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
