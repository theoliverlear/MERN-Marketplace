import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../images/logo.png";
import AccountBubble from "../account_bubble/AccountBubble";
import searchIcon from "../../images/search_icon.png";
import cartIcon from "../../images/cart_icon.png";
import SearchBox from "../search_box/SearchBox";
function NavBar() {
    return (
        <div className="NavBar">
            <nav>
                <img src={logo} id="nav-logo-img"
                     alt="logo"/>
                <ul>
                    <div id="site-navigators">
                    <li id="home-div">
                        <Link className="nav-list-link" to="/">
                            <h3>Home</h3>
                        </Link>
                    </li>
                    <li id="explore-div">
                        <Link className="nav-list-link" to="/explore">
                            <h3>Explore</h3>
                        </Link>
                    </li>
                    </div>
                    <li id="search-container">
                        <img src={searchIcon} className="icon" id="search-icon"
                             alt="search icon"/>
                        <Link className="nav-list-link" to="">

                        </Link>
                        {/*<input type="text" id="search-input"*/}
                        {/*       placeholder="Search..."/>*/}
                        <SearchBox />
                    </li>
                    <li>
                        <Link className="nav-list-link" to="/cart" id="cart-container">
                            <h3>Cart</h3>
                            <img src={cartIcon} className="icon" id="cart-icon"
                                 alt="cart icon"/>
                            <div id="cart-count-container">
                                <h3 id="cart-count-number-text">0</h3>
                            </div>
                        </Link>
                    </li>
                </ul>
                <AccountBubble />
            </nav>
        </div>
    );
}
//
// document.addEventListener('DOMContentLoaded', function (){
//     function submitSearch() {
//         const searchInput = document.getElementById("search-input");
//         const searchQuery = searchInput.value;
//         console.log("Searching for: " + searchQuery);
//     }
//
//     const searchButton = document.getElementById("search-icon");
//     searchButton.addEventListener("click", submitSearch);
// });
export default NavBar;