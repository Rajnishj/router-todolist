import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Demo from "./components/pages/Demo";
import Home from "./components/pages/Home";
import KeyFeature from "./components/pages/KeyFeature";
import Pricing from "./components/pages/Pricing";
import Testimonial from "./components/pages/Testimonial";
import Main from "./Main";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Main />
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route path="/features" element={<KeyFeature />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
