import React, { useState } from "react";
import { Menu, Search } from "react-feather";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg";
import NavLink from "./NavLink";
import SearchBar from "./SearchBar";

export default function Header() {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  return (
    <div className="header__container">
      <div className="header__container__content">
        <Link to="/">
          <img src={logo} alt="logo" className="header__container__logo" />
        </Link>
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
