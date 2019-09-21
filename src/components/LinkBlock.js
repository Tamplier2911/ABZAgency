import React from "react";

const LinkBlock = props => {
  return (
    <div className={props.class}>
      <ul className="footer__mid--ul">
        <li className="footer__mid--li">
          <a href="/" className="footer__mid--link link">
            {props.link_1}
          </a>
        </li>
        <li className="footer__mid--li">
          <a href="/" className="footer__mid--link link">
            {props.link_2}
          </a>
        </li>
        <li className="footer__mid--li">
          <a href="/" className="footer__mid--link link">
            {props.link_3}
          </a>
        </li>
        <li className="footer__mid--li">
          <a href="/" className="footer__mid--link link">
            {props.link_4}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LinkBlock;
