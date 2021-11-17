import React from "react";
import { Link } from "react-router-dom";
import recentNewsPic from "../Assets/recentNewsPic.png";

export default function NewsSmallCard() {
  return (
    <Link to="/" className="news__card__small">
      <div className="news__card__small__content">
        <div className="news__card__small__content__heading">
          لیے چارٹرڈ فلائٹس تین گنا لیے چارٹرڈ فلائٹس تین گنا
        </div>
        <div className="news__card__small__content__info">
          لیے چارٹرڈ فلائٹس تین گنا لیے چارٹرڈ فلائٹس تین گنا لیے چارٹرڈ فلائٹس
          تین گنا لیے چارٹرڈ فلائٹس تین گنا
        </div>
      </div>
      <img
        src={recentNewsPic}
        alt="recentNewsPic"
        className="news__card__small__img"
      />
    </Link>
  );
}
