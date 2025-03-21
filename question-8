import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

const App = () => {
    return (
        <Router>
            <nav style={{ padding: "10px", borderBottom: "1px solid black", backgroundColor: "aqua", }}>
                <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
                <Link to="/about" style={{ marginRight: "15px" }}>About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
