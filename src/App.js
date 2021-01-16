import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Related to store
import { Provider } from "react-redux";
import store from "./store/store";

// Importing components
import Landing from "./pages/landing";

//Importing stylesheet
import "sanstrap/dist/css/sanstrap.css";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* <Navbar/> */}
          <Route exact path="/" component={Landing} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
