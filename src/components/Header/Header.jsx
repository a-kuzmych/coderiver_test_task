import React from "react";
import "./Header.scss";
import Search from "../Search/Search";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <a href="/" className="header__logo-link">
          <div className="header__logo"></div>
        </a>
        <div className="header__vector"></div>
        <div className="header__date">Friday July 8th</div>
      </div>
      <div className="header__right">
        <Search />
        <div className="header__avatar"></div>
      </div>
    </header>
  );
};

export default Header;
