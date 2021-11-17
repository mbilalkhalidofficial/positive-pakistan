import React from "react";
import { Link } from "react-router-dom";
import newsPic from "../Assets/newsPic.png";

export default function NewsCard() {
  return (
    <Link to="/news-details/news" className="news__card">
      <div className="news__card__content">
        <div className="news__card__heading">
          سلیمان کے بینک اکاؤنٹس این سی اے کا کہنا ہے کہ اسے نہیں ملا کہنا ہے کہ
          اسے نہیں ملا اسے نہیں ملا اسے نہیں ملا اسے نہیں ملا اسے نہیں ملا اسے
          نہیں ملا اسے نہیں ملا
        </div>
        <div className="news__card__info">
          سلیمان کے بینک اکاؤنٹس این سی اے کا کہنا ہے کہ اسے نہیں ملا کہنا ہے کہ
          اسے نہیں ملا سلیمان کے بینک اکاؤنٹس این سی اے کا کہنا ہے کہ اسے نہیں
          ملا کہنا ہے کہ اسے نہیں ملا سلیمان کے بینک اکاؤنٹس این سی اے کا کہنا
          ہے کہ اسے نہیں ملا کہنا ہے کہ اسے نہیں ملا ہے کہ اسے نہیں ملا کہنا ہے
          کہ اسے نہیں ملا ہے کہ اسے نہیں ملا کہنا ہے کہ اسے نہیں ملا ہے کہ اسے
          نہیں ملا کہنا ہے کہ اسے نہیں ملا ہے کہ اسے نہیں ملا کہنا ہے کہ اسے
          نہیں ملا ہے کہ اسے نہیں ملا کہنا ہے کہ اسے نہیں ملا
        </div>
      </div>

      <img src={newsPic} alt="newsPic" className="news__card__img" />
    </Link>
  );
}
