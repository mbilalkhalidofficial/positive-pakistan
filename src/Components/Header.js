import React, { useState } from "react";
import { Menu, Search, X } from "react-feather";
import { useNavigate } from "react-router";
import logo from "../Assets/logo.svg";

function NavLink({ label, path, defaultChecked }) {
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

function SearchBar({ setIsSearchBarOpen }) {
  return (
    <form action="" className="search__bar">
      <button className="search__bar__btn" type="button">
        <X
          size={18}
          color="currentColor"
          onClick={() => {
            setIsSearchBarOpen(false);
          }}
        />
      </button>
      <input
        type="text"
        className="search__bar__field"
        placeholder="یہاں تلاش کریں"
      />
      <button className="search__bar__btn">
        <Search size={18} color="currentColor" />
      </button>
    </form>
  );
}

export default function Header() {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  return (
    <div className="header__container">
      <div className="header__container__content">
        <img src={logo} alt="logo" className="header__container__logo" />
        <div className="header__container__nav">
          <button className="menu__btn">
            <Menu size={18} color="currentColor" />
          </button>
          <div className="search__btn">
            <Search size={18} color="currentColor" />
            <input
              type="radio"
              className="search__btn__input"
              name="header__container__nav__link__input"
              onClick={() => {
                isSearchBarOpen
                  ? setIsSearchBarOpen(false)
                  : setIsSearchBarOpen(true);
              }}
            />
          </div>
          {isSearchBarOpen ? (
            <SearchBar setIsSearchBarOpen={setIsSearchBarOpen} />
          ) : null}
          <NavLink label="رابط کریں" path="/contact" />
          <NavLink label="ویڈیو" path="/" />
          <NavLink label="تصاویر" path="/" />
          <NavLink label="سائنس" path="/" />
          <NavLink label="کھیل" path="/" />
          <NavLink label="عالمی خبریں" path="/" />
          <NavLink label="پاکستان" path="/hello" />
          <NavLink label="صفحہ اول" path="/" defaultChecked={true} />
        </div>
      </div>
    </div>
  );
}
