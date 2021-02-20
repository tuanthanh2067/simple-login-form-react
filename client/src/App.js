import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { history } from "./utils/history";

import { LOGIN_SUCCESS } from "./constants/actionTypes";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Modal from "./components/Popup";
import Home from "./components/Home";
import Lobby from "./components/Lobby";
import Logout from "./components/Logout";

function App() {
  const dispatch = useDispatch();

  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <Modal />
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              console.log(localStorage.getItem("user"));
              if (localStorage.getItem("user")) {
                dispatch({
                  type: LOGIN_SUCCESS,
                  payload: { user: localStorage.getItem("user") },
                });
                return <Redirect to="/home" />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          ></Route>
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
