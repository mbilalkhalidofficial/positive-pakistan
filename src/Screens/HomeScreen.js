import React from "react";
import RecentNewsCard from "../Components/RecentNewsCard";
import NewsCard from "../Components/NewsCard";
import MainNewsCard from "../Components/MainNewsCard";
import ad1 from "../Assets/ad1.png";
import NewsSmallCard from "../Components/NewsSmallCard";

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
          <MainNewsCard />
          <div className="home__container__jumbotron__bottom">
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
      <div className="home__container__recent">
        <div className="home__container__recent__col">
          <NewsSmallCard />
          <NewsSmallCard />
        </div>
        <div className="home__container__recent__col">
          <NewsSmallCard />
          <NewsSmallCard />
        </div>
        <div className="home__container__recent__col">
          <img src={ad1} alt="ad1" />
        </div>
      </div>
    </div>
  );
}
