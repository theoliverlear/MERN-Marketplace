import './App.css';
import Header from "./Header";
import React from "react";
import Home from "./Home";

import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
