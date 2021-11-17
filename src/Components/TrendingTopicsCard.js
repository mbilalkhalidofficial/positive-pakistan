import React from "react";
import { Link } from "react-router-dom";

export default function TrendingTopicsCard({ style, trending__topics__img }) {
  return (
    <Link to="/" className="trending__topics__card" style={style}>
      <img
        src={trending__topics__img}
        alt="trending__topics__img"
        className="trending__topics__card__img"
      />
      <div className="trending__topics__card__content">
        <div className="trending__topics__card__content__heading">
          پاکستان سے بیرون ملک سفرپاکستان سے بیرون ملک سفر
        </div>
        <span className="trending__topics__card__content__info">
          پاکستان سے بیرون ملک سفرپاکستان سے بیرون ملک سفرپاکستان سے بیرون ملک
          سفرپاکستان سے بیرون ملک سفرپاکستان سے بیرون ملک سفر سفرپاکستان سے
          بیرون ملک سفرپاکستان سے بیرون ملک سفر سفرپاکستان سے بیرون ملک
          سفرپاکستان سے بیرون ملک سفر سفرپاکستان سے بیرون ملک سفرپاکستان سے
          سفرپاکستان سے بیرون ملک سفرپاکستان سے بیرون ملک سفر سفرپاکستان سے
        </span>
      </div>
    </Link>
  );
}
