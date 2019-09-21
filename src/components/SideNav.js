import "../sass/SideNav.scss";
import React from "react";
import jump from "jump.js";
import ReactDOM from "react-dom";
import userImage from "../images/user-superstar-2x.jpg";

const onBackgroundClick = () => {
  document.querySelector(".sidenav").style.display = "none";
};

const onLinkClick = (e, target) => {
  e.preventDefault();
  document.querySelector(".sidenav").style.display = "none";
  jump(target);
};

const SideNav = () => {
  return ReactDOM.createPortal(
    <header className="sidenav" onClick={onBackgroundClick}>
      <nav
        className="sidenav__container"
        onClick={e => e.stopPropagation()}
      >
        <figure className="sidenav__user">
          <div className="sidenav__user--image-ct">
            <img
              className="sidenav__user--image"
              src={userImage}
              alt="happy user face"
            />
          </div>
          <div className="sidenav__user--name">
            Superstar
          </div>
          <div className="sidenav__user--email">
            Superstar@gmail.com
          </div>
        </figure>
        <ul className="sidenav__navigation">
          <li className="sidenav__navigation--li">
            <a
              className="sidenav__navigation--link"
              href="#about"
              onClick={e => onLinkClick(e, "#about")}
            >
              About me
            </a>
          </li>
          <li className="sidenav__navigation--li">
            <a
              className="sidenav__navigation--link"
              href="#relationships"
              onClick={e =>
                onLinkClick(e, "#relationships")
              }
            >
              Relationships
            </a>
          </li>
          <li className="sidenav__navigation--li">
            <a
              className="sidenav__navigation--link"
              href="#requirements"
              onClick={e => onLinkClick(e, "#requirements")}
            >
              Requirements
            </a>
          </li>
          <li className="sidenav__navigation--li">
            <a
              className="sidenav__navigation--link"
              href="#users"
              onClick={e => onLinkClick(e, "#users")}
            >
              Users
            </a>
          </li>
          <li className="sidenav__navigation--li">
            <a
              className="sidenav__navigation--link"
              href="#registration"
              onClick={e => onLinkClick(e, "#registration")}
            >
              Sign Up
            </a>
          </li>
          <li className="sidenav__navigation--li">
            <a
              className="sidenav__navigation--link"
              href="/"
              onClick={onBackgroundClick}
            >
              Sign Out
            </a>
          </li>
        </ul>
      </nav>
    </header>,
    document.querySelector("#sidenav")
  );
};

export default SideNav;
