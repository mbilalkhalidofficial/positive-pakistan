import React from "react";
import main__news__pic from "../Assets/mainNewsPic.png";
import { Link } from "react-router-dom";

export default function MainNewsCard() {
  return (
    <div className="main__news__card">
      <img
        src={main__news__pic}
        alt="main__news__pic"
        className="main__news__card__img"
      />
      <div className="main__news__card__content">
        <div className="main__news__card__content__heading">
          سلیمان کے بینک اکاؤنٹس این سی اے کا کہنا ہے کہ اسے نہیں ملا کہنا ہے کہ
          اسے نہیں ملا
        </div>
        <div className="main__news__card__content__info">
          سلیمان کے بینک اکاؤنٹس این سی اے کا کہنا ہے کہ اسے نہیں ملا سلیمان کے
          بینک اکاؤنٹس این سی اے کا کہنا ہے کہ اسے نہیں ملا سلیمان کے بینک
          اکاؤنٹس این سی اے کا سلیمان کے بینک اکاؤنٹس این سی اے کا سلیمان کے
          بینک اکاؤنٹس این سی اے کا
        </div>
        <Link
          to="/news-details/main"
          className="main__news__card__content__btn"
        >
          مزید پڑھیں
        </Link>
      </div>
    </div>
  );
}
