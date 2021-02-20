import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { history } from "./utils/history";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Modal from "./components/Popup";
import Home from "./components/Home";
import Lobby from "./components/Lobby";
import Logout from "./components/Logout";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <Modal />
        <Switch>
          <Route path="/" exact>
            <Redirect to="login" />
          </Route>
          <Route path="/login" render={() => <Login />} />
          <Route path="/signup" render={() => <Signup />} />
          <Route path="/home" render={() => <Home />} />
          <Route path="/lobby" render={() => <Lobby />} />
          <Route path="/logout" render={() => <Logout />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
