import React from "react";
import Home from "./containers/Home";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/Footer";
// import Login from "./components/auth/login";

function App() {
  return (
    <Provider store={store}>
      <div id="wrapper">
        <Router>
        <Nav />
          <Switch>
            {/* <Route exact path="/login">
              <Home />
            </Route> */}
            <Route exact path="/home">
              <Home />
            </Route>
            <Route component={NoMatchPage} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
}

const NoMatchPage = () => {
  return <h3>404 - Not found</h3>;
};

export default App;
