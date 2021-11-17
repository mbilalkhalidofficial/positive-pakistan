import React from "react";
import { Link } from "react-router-dom";
import recentNewsPic from "../Assets/recentNewsPic.png";

export default function CityCard() {
  return (
    <Link to="/" className="city__card">
      <img
        src={recentNewsPic}
        alt="recentNewsPic"
        className="city__card__img"
      />
      <div className="city__card__heading">لاہور</div>
    </Link>
  );
}
