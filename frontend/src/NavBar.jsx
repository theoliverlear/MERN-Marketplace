import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "./images/logo.png";

function NavBar() {
    return (
        <div className="NavBar">
            <nav>
                <img src={logo} id="nav-logo-img"
                     alt="logo"/>
                <ul>
                    <li>
                        <Link className="nav-list-link" to="/">
                            <h3>Home</h3>
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-list-link" to="/explore">
                            <h3>Explore</h3>
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-list-link" to="/search">
                            <h3>Search</h3>
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-list-link" to="/about">
                            <h3>About</h3>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;