import React from "react";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import { Provider } from "react-redux";
import store from "./store";
import Nav from "./components/nav";
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div id="wrapper">
        <Nav />
        <Home />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
