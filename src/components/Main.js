import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Main.css";

function Main() {
  return (
    <div className="flex-item-first">
      <NavLink className="logoLink" to="/">
        <div className="logo">Targeting</div>
      </NavLink>
      <div className="settings">
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/"
        >
          <div className="settings__modules">
            <i className="fas fa-window-maximize"></i>
            <p>Все Модули</p>
          </div>
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/resources"
        >
          <div className="settings__resources">
            <i className="fas fa-cloud"></i>
            <p>Ресурсы</p>
          </div>
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/library"
        >
          <div className="settings__library">
            <i className="fas fa-book-open"></i>
            <p>Библиотека</p>
          </div>
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/settings"
        >
          <div className="settings__configurations">
            <i className="fas fa-cog"></i>
            <p>Настройки</p>
          </div>
        </NavLink>
      </div>
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/"
      >
        <div className="exit">
          <i className="fas fa-sign-out-alt"></i>
          <p>Выйти</p>
        </div>
      </NavLink>
      <div className="additional">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magnam
        recusandae sit tempora. Vitae, possimus! Culpa, corporis quo doloremque
        accusantium beatae dolorum, deserunt, optio veniam eius animi nisi odit
        libero!
      </div>
    </div>
  );
}

export default Main;
