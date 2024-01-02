import React from "react";
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
                        <a className="nav-list-link" href="/"><h3>Home</h3>
                        </a>
                    </li>
                    <li>
                        <a className="nav-list-link" href="/explore">
                            <h3>Explore</h3></a>
                    </li>
                    <li>
                        <a className="nav-list-link" href="/search">
                            <h3>Search</h3></a>
                    </li>
                    <li>
                        <a className="nav-list-link" href="/about">
                            <h3>About</h3></a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;