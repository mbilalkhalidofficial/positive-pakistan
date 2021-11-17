import React from "react";
import RecentNewsCard from "../Components/RecentNewsCard";
import NewsCard from "../Components/NewsCard";
import MainNewsCard from "../Components/MainNewsCard";
import ad1 from "../Assets/ad1.png";
import trending__topics__img1 from "../Assets/trending_topics/trending__topics__img1.png";
import trending__topics__img2 from "../Assets/trending_topics/trending__topics__img2.png";
import trending__topics__img3 from "../Assets/trending_topics/trending__topics__img3.png";
import trending__topics__img4 from "../Assets/trending_topics/trending__topics__img4.png";
import trending__topics__img5 from "../Assets/trending_topics/trending__topics__img5.png";
import trending__topics__img6 from "../Assets/trending_topics/trending__topics__img6.png";
import trending__topics__img7 from "../Assets/trending_topics/trending__topics__img7.png";
import trending__topics__img8 from "../Assets/trending_topics/trending__topics__img8.png";
import trending__topics__img9 from "../Assets/trending_topics/trending__topics__img9.png";
import NewsSmallCard from "../Components/NewsSmallCard";
import TrendingTopicsCard from "../Components/TrendingTopicsCard";
import NewsCatagory from "../Components/NewsCatagory";

export default function NewsDetailsScreen() {
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
      <div className="home__container__trending__catagory">
        <NewsCatagory title="عا لمی خبریں" path="/global-news">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </NewsCatagory>
        <NewsCatagory title="عا لمی خبریں" path="/global-news">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </NewsCatagory>
        <NewsCatagory title="عا لمی خبریں" path="/global-news">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </NewsCatagory>
        <NewsCatagory title="عا لمی خبریں" path="/global-news">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </NewsCatagory>
        <NewsCatagory title="عا لمی خبریں" path="/global-news">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </NewsCatagory>
      </div>
    </div>
  );
}
