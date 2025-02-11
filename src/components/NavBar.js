import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <>
        <nav
          className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}
        >
          <Link className="navbar-brand" to="/">
            NewsApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/">
                  About
                </Link>
              </li>

              <div className="dropdown mx-2">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/sports">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/entertainment">
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                    Business
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/health">
                    Health
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>

            <div className="ms-auto">
              <div
                className={`form-check form-switch text-${
                  this.props.mode === "light" ? "dark" : "light"
                }`}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={this.props.togglemode}
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable dark mode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
