import React from "react";
import NewsCard from "../Components/NewsCard";
import catagoryBackgroundImg from "../Assets/catagoryBackgroundImg.png";
import NewsCatagory from "../Components/NewsCatagory";
import CityCard from "../Components/CityCard";

export default function NewsCatagoryScreen() {
  return (
    <div className="container catagory__container">
      <div className="catagory__container__header">
        <img
          src={catagoryBackgroundImg}
          alt="catagoryBackgroundImg"
          className="catagory__container__header__img"
        />
        <div className="catagory__container__header__content">کھیل</div>
      </div>
      <div className="catagory__container__content">
        <div className="home__container__trending__catagory">
          <NewsCatagory title="عا لمی خبریں" path="/global-news">
            <NewsCard />
            <NewsCard />
          </NewsCatagory>
          <NewsCatagory title="عا لمی خبریں" path="/global-news">
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </NewsCatagory>
          <NewsCatagory title="عا لمی خبریں" path="/global-news">
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </NewsCatagory>
          <NewsCatagory title="عا لمی خبریں" path="/global-news">
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </NewsCatagory>
          <NewsCatagory title="عا لمی خبریں" path="/global-news">
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </NewsCatagory>
        </div>
        <div className="catagory__container__content__right">
          <div className="catagory__container__content__right__row">
            <CityCard />
            <CityCard />
          </div>
          <div className="catagory__container__content__right__row">
            <CityCard />
            <CityCard />
          </div>
          <div className="catagory__container__content__right__row">
            <CityCard />
            <CityCard />
          </div>
          <div className="catagory__container__content__right__row">
            <CityCard />
            <CityCard />
          </div>
          <div className="catagory__container__content__right__row">
            <CityCard />
            <CityCard />
          </div>
          <div className="catagory__container__content__right__row">
            <CityCard />
            <CityCard />
          </div>
          <div className="catagory__container__content__right__row">
            <CityCard />
            <CityCard />
          </div>
          <div className="catagory__container__content__right__row">
            <CityCard />
            <CityCard />
          </div>
          <div className="catagory__container__content__right__row">
            <CityCard />
            <CityCard />
          </div>
        </div>
      </div>
    </div>
  );
}
