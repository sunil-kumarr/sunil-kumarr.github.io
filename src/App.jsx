import React from "react";
import BrowserCard from "./components/BrowserCard";
import ShadowCard from "./components/ShadowCard";
import BlogCard from "./components/BlogCard";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
