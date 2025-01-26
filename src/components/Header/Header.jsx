import React from "react";
import "./Header.scss";
import Search from "../Search/Search";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <a href="/" className="header__logo-link">
          <img src="./logo.svg" alt="logo" className="header__logo" />
        </a>
        <img
          src="./src/assets/img/header/vector.svg"
          alt="Decoration"
          className="header__vector"
        />
        <div className="header__date">Friday July 8th</div>
      </div>
      <div className="header__right">
        <Search />
        <img
          src="./src/assets/img/header/avatar.png"
          alt="Avatar"
          className="header__avatar"
        />
      </div>
    </header>
  );
};

export default Header;
