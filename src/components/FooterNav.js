import React from "react";
import jump from "jump.js";

const onLinkClick = (e, target) => {
  e.preventDefault();
  jump(target);
};

const FooterNav = props => {
  return (
    <ul className="footer__top--ul">
      <li className="footer__top--li">
        <a
          href="/"
          className="footer__top--link link"
          onClick={e => onLinkClick(e, "#about")}
        >
          {props.link_1}
        </a>
      </li>
      <li className="footer__top--li">
        <a
          href="/"
          className="footer__top--link link"
          onClick={e => onLinkClick(e, "#relationships")}
        >
          {props.link_2}
        </a>
      </li>
      <li className="footer__top--li">
        <a
          href="/"
          className="footer__top--link link"
          onClick={e => onLinkClick(e, "#requirements")}
        >
          {props.link_3}
        </a>
      </li>
      <li className="footer__top--li">
        <a
          href="/"
          className="footer__top--link link"
          onClick={e => onLinkClick(e, "#users")}
        >
          {props.link_4}
        </a>
      </li>
      <li className="footer__top--li">
        <a
          href="/"
          className="footer__top--link link"
          onClick={e => onLinkClick(e, "#registration")}
        >
          {props.link_5}
        </a>
      </li>
    </ul>
  );
};

export default FooterNav;
