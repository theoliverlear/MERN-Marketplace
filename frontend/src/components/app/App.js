import './App.css';
import Header from "../header/Header";
import React from "react";
import Home from "../home/Home";

import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
function App() {
    React.useEffect(() => {
        document.ondragstart = function() {
            return false;
        }
    }, []);

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