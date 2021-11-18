import React from "react";
import "./Styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import NewsCatagoryScreen from "./Screens/NewsCatagoryScreen";
import NewsDetailsScreen from "./Screens/NewsDetailsScreen";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Banner />
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route
            path="catagory/pakistan"
            element={<NewsCatagoryScreen title="پاکستان" />}
          />
          <Route
            path="/catagory/global"
            element={<NewsCatagoryScreen title="عالمی" />}
          />
          <Route
            path="/catagory/play"
            element={<NewsCatagoryScreen title="کھیل" />}
          />
          <Route
            path="/catagory/science"
            element={<NewsCatagoryScreen title="سائنس" />}
          />
          <Route
            path="/catagory/photos"
            element={<NewsCatagoryScreen title="تصاویر" />}
          />
          <Route
            path="/catagory/videos"
            element={<NewsCatagoryScreen title="ویڈیو" />}
          />
          <Route path="/news-details/:id" element={<NewsDetailsScreen />} />
          <Route path="/contact" element={<NewsDetailsScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
