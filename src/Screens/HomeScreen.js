import React from "react";
import RecentNewsCard from "../Components/RecentNewsCard";
import main__news__pic from "../Assets/mainNewsPic.png";
import { Link } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

export default function HomeScreen() {
  return (
    <div className="container home__container">
      <div className="home__container__jumbotron">
        <div className="home__container__jumbotron__left">
          <RecentNewsCard />
          <RecentNewsCard />
          <RecentNewsCard />
          <RecentNewsCard />
          <RecentNewsCard />
          <RecentNewsCard />
          <RecentNewsCard />
          <RecentNewsCard />
          <RecentNewsCard />
          <RecentNewsCard />
          <RecentNewsCard />
          <RecentNewsCard />
          <RecentNewsCard />
          <RecentNewsCard />
          <RecentNewsCard />
        </div>
        <div className="home__container__jumbotron__right">
          <div className="main__news__card">
            <img
              src={main__news__pic}
              alt="main__news__pic"
              className="main__news__card__img"
            />
            <div className="main__news__card__content">
              <div className="main__news__card__content__heading">
                سلیمان کے بینک اکاؤنٹس این سی اے کا کہنا ہے کہ اسے نہیں ملا کہنا
                ہے کہ اسے نہیں ملا
              </div>
              <div className="main__news__card__content__info">
                سلیمان کے بینک اکاؤنٹس این سی اے کا کہنا ہے کہ اسے نہیں ملا
                سلیمان کے بینک اکاؤنٹس این سی اے کا کہنا ہے کہ اسے نہیں ملا
                سلیمان کے بینک اکاؤنٹس این سی اے کا سلیمان کے بینک اکاؤنٹس این
                سی اے کا سلیمان کے بینک اکاؤنٹس این سی اے کا
              </div>
              <Link to="/" className="main__news__card__content__btn">
                مزید پڑھیں
              </Link>
            </div>
          </div>
          <div className="home__container__jumbotron__bottom">
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
