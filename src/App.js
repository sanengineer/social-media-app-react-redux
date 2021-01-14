import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Related to Authentication
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAction";

// Related to store
import { Provider } from "react-redux";
import store from "./store/store";

// Importing components
import Landing from "./pages/landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/auth/Dashboard";

//Importing stylesheet
import "sanstrap/dist/css/sanstrap.css";
import "./index.css";

// check for token  to keep user login

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
