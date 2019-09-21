import React from "react";
import jump from "jump.js";

import { ReactComponent as Logo } from "../images/logo/logo.svg";
import { ReactComponent as Icon } from "../icons/sign-out.svg";
import superstart from "../images/user-superstar-2x.jpg";

const onLinkClick = (e, target) => {
  e.preventDefault();
  jump(target);
};

const DesktopNav = () => {
  return (
    <header className="navigation">
      <nav className="navigation__wrapper">
        <div className="navigation__logo">
          <Logo
            className="navigation__logo--icon"
            onClick={e => onLinkClick(e, "#cta")}
          />
        </div>
        <ul className="navigation__bar">
          <li className="navigation__bar--item">
            <a
              href="#about"
              className="navigation__bar--link"
              onClick={e => onLinkClick(e, "#about")}
            >
              About me
            </a>
          </li>
          <li className="navigation__bar--item">
            <a
              href="#relationships"
              className="navigation__bar--link"
              onClick={e =>
                onLinkClick(e, "#relationships")
              }
            >
              Relationships
            </a>
          </li>
          <li className="navigation__bar--item">
            <a
              href="#requirements"
              className="navigation__bar--link"
              onClick={e => onLinkClick(e, "#requirements")}
            >
              Requirements
            </a>
          </li>
          <li className="navigation__bar--item">
            <a
              href="#users"
              className="navigation__bar--link"
              onClick={e => onLinkClick(e, "#users")}
            >
              Users
            </a>
          </li>
          <li className="navigation__bar--item">
            <a
              href="#registration"
              className="navigation__bar--link"
              onClick={e => onLinkClick(e, "#registration")}
            >
              Sign Up
            </a>
          </li>
        </ul>
        <figure className="navigation__login">
          <div className="navigation__login--name">
            <div className="navigation__login--name-a">
              Superstar
            </div>
            <div className="navigation__login--name-b">
              Superstar@gmail.com
            </div>
          </div>
          <img
            src={superstart}
            alt="happy face"
            className="navigation__login--img"
          ></img>
          <Icon className="navigation__login--svg" />
        </figure>
      </nav>
    </header>
  );
};

export default DesktopNav;
