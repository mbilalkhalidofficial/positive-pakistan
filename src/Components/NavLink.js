import React from "react";
import { useNavigate } from "react-router";

export default function NavLink({ label, path, defaultChecked }) {
  const navigate = useNavigate();
  return (
    <div className="header__container__nav__link">
      <input
        type="radio"
        className="header__container__nav__link__input"
        name="header__container__nav__link__input"
        defaultChecked={defaultChecked}
        onChange={() => {
          navigate(path);
        }}
      />
      <div className="header__container__nav__link__content">{label}</div>
    </div>
  );
}
