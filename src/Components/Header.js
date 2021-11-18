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
        <div
          className="header__container__nav"
          style={isSearchBarOpen ? { flex: 1, maxWidth: 700 } : null}
        >
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
          <div className="header__container__nav__links">
            <NavLink label="رابط کریں" path="/contact" />
            <NavLink label="تازہ ترین" path="/catagory/latest" />
            <NavLink label="موسم" path="/catagory/season" />
            <NavLink label="سائنس" path="/catagory/science" />
            <NavLink label="کھیل" path="/catagory/play" />
            <NavLink label="عالمی خبریں" path="/catagory/global" />
            <NavLink label="پاکستان" path="/catagory/pakistan" />
            <NavLink label="صفحہ اول" path="/" defaultChecked={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
