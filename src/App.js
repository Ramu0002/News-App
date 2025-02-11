import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./components/News";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      mode: "light",
    };
  }

  togglemode = () => {
    if (this.state.mode === "light") {
      this.setState({ mode: "dark" });
    } else {
      this.setState({ mode: "light" });
    }
  };
  render() {
    return (
      <>
        <Router>
          <NavBar mode={this.state.mode} togglemode={this.togglemode} />
          <Routes>

          
          <Route
              path="/"
              element={
                <News
                  exact
                  key="business"
                  mode={this.state.mode}
                  togglemode={this.togglemode}
                  pageSize={6}
                  category="business"
                />
              }
            />

<Route
              path="/health"
              element={
                <News
                  exact
                  key="health"
                  mode={this.state.mode}
                  togglemode={this.togglemode}
                  pageSize={6}
                  category="health"
                />
              }
            />
            
            <Route
              path="/sports"
              element={
                <News
                exact
                key="sports"
                  mode={this.state.mode}
                  togglemode={this.togglemode}
                  pageSize={6}
                  category="sports"
                />
              }
            />

            <Route
              path="/entertainment"
              element={
                <News
                exact
                key="entertainment"
                  mode={this.state.mode}
                  togglemode={this.togglemode}
                  pageSize={6}
                  category="entertainment"
                />
              }
            />

           
          </Routes>
        </Router>
      </>
    );
  }
}
