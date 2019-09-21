import React from "react";
import jump from "jump.js";

import { ReactComponent as Logo } from "../images/logo/logo.svg";
import { ReactComponent as Menu } from "../icons/line-menu.svg";

const onLinkClick = (e, target) => {
  e.preventDefault();
  jump(target);
};

const onBurgerClick = () => {
  document.querySelector(".sidenav").style.display =
    "block";
};

const TabletNav = () => {
  return (
    <header className="navigation-tab">
      <nav className="navigation-tab-h">
        <div className="navigation-tab-h__logo">
          <Logo
            className="navigation-tab-h__logo--icon"
            onClick={e => onLinkClick(e, "#cta")}
          />
        </div>
        <Menu
          className="navigation-tab-h__menu"
          onClick={onBurgerClick}
        />
      </nav>
    </header>
  );
};

export default TabletNav;
