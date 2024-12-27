import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import Reader from "./components/Reader";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark" />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/reader/:id" element={<Reader />} />
      </Routes>
    </Router>
  );
}

export default App;
