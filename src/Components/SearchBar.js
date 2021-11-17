import React from "react";
import { Search, X } from "react-feather";

export default function SearchBar({ setIsSearchBarOpen }) {
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
