import React from "react";
import "./Styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import NewsCatagoryScreen from "./Screens/NewsCatagoryScreen";
import NewsDetailsScreen from "./Screens/NewsDetailsScreen";
import FooterLink from "./Components/FooterLink";

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
            path="/catagory/season"
            element={<NewsCatagoryScreen title="موسم" />}
          />
          <Route
            path="/catagory/latest"
            element={<NewsCatagoryScreen title="تازہ ترین" />}
          />
          <Route path="/news-details/:id" element={<NewsDetailsScreen />} />
          <Route path="/contact" element={<NewsDetailsScreen />} />
        </Routes>
        <div className="footer__container">
          <div className="footer__container__content">
            <div className="footer__container__content__top">
              <FooterLink label="رابط کریں" path="/contact" />
              <FooterLink label="ویڈیو" path="/catagory/videos" />
              <FooterLink label="تصاویر" path="/catagory/photos" />
              <FooterLink label="سائنس" path="/catagory/science" />
              <FooterLink label="کھیل" path="/catagory/play" />
              <FooterLink label="عالمی خبریں" path="/catagory/global" />
              <FooterLink label="پاکستان" path="/catagory/pakistan" />
              <FooterLink label="صفحہ اول" path="/" defaultChecked={true} />
            </div>
            <div className="footer__container__content__bottom">
              تمام حقوق پاکستانی ریسرچ اینڈ پبلشنگ کمپنی کے پاس محفوظ ہیں۔
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
