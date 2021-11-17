import React from "react";
import { Link } from "react-router-dom";

export default function NewsCatagory({ children, title, path }) {
  return (
    <div className="news__catagory">
      <div
        className="news__catagory__header"
        style={path ? null : { justifyContent: "center" }}
      >
        {path ? (
          <Link to={path} className="news__catagory__header__btn">
            سب دیکھیں
          </Link>
        ) : null}
        <div className="news__catagory__header__heading">{title}</div>
      </div>
      <div className="news__catagory__content">{children}</div>
    </div>
  );
}
