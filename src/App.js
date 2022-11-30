import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}>
                </Route>
                <Route path="/register" element={<Register/>}>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
