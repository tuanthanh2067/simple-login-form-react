import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { history } from "./utils/history";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
import Modal from "./components/Popup";
import Home from "./components/Home";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Nav />
        <Modal />
        <Switch>
          <Route path="/" exact>
            <Redirect to="login" />
          </Route>
          <Route path="/login" render={() => <Login />} />
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/home" render={() => <Home />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
