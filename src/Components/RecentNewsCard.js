import React from "react";
import { Link } from "react-router-dom";
import recent__news__img from "../Assets/recentNewsPic.png";

export default function RecentNewsCard() {
  return (
    <Link to="/" className="recent__news__card">
      <div className="recent__news__card__heading">
        سلیمان کے بینک اکاؤنٹس این سی اے کا کہنا ہے کہ اسے نہیں ملا
      </div>
      <img
        src={recent__news__img}
        alt="recent__news__img"
        className="recent__news__card__img"
      />
    </Link>
  );
}
