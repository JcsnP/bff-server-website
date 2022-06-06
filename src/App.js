import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import Rules from './pages/Rules';
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/rules" element={<Rules />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
