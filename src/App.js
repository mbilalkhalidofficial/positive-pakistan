import React from "react";
import "./Styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Banner from "./Components/Banner";
import Header from "./Components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Banner />
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="hello" element={<div>hey</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
