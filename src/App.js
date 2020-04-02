import React from "react";
import Home from "./containers/Home";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/Footer";
import AddProject from "./containers/project/addProject";
import Alert from "./components/Alert";

function App() {
  
  return (
    <Provider store={store}>
      <Alert/>
      <div id="wrapper">
        <Router>
        <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/project/addproject">
              <AddProject />
            </Route>
            <Route component={NoMatchPage} />
          </Switch>
        <Footer />
        </Router>
      </div>
    </Provider>
  );
}

const NoMatchPage = () => {
  return <h3>404 - Not found</h3>;
};

export default App;
