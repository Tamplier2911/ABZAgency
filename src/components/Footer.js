import "../sass/Footer.scss";
import React from "react";
import jump from "jump.js";
import LinkBlock from "./LinkBlock";
import FooterNav from "./FooterNav";

import { ReactComponent as Logo } from "../images/logo/logo-w.svg";
import { ReactComponent as Facebook } from "../icons/facebook.svg";
import { ReactComponent as LinkedIn } from "../icons/linkedin.svg";
import { ReactComponent as Instagram } from "../icons/instagram.svg";
import { ReactComponent as Twitter } from "../icons/twitter.svg";
import { ReactComponent as Pinterest } from "../icons/pinterest.svg";
import { ReactComponent as Mail } from "../icons/mail.svg";
import { ReactComponent as Phone } from "../icons/phone.svg";
import { ReactComponent as Mobile } from "../icons/cellphone.svg";

const onLinkClick = (e, target) => {
  e.preventDefault();
  jump(target);
};

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__top">
        <Logo
          className="footer__top--logo"
          onClick={e => onLinkClick(e, "#cta")}
        />
        <FooterNav
          link_1={"About me"}
          link_2={"Relationships"}
          link_3={"Requirements"}
          link_4={"Users"}
          link_5={"Sign Up"}
        />
      </div>
      <div className="footer__mid">
        <div className="footer__mid--contacts">
          <Mail className="footer__mid--svg" />
          <span className="footer__mid--mail">
            work.of.future@gmail.com
          </span>
          <Phone className="footer__mid--svg" />
          <span className="footer__mid--phone">
            +38 (050) 789 24 98
          </span>
          <Mobile className="footer__mid--svg" />
          <span className="footer__mid--mobile">
            +38 (095) 556 08 45
          </span>
        </div>

        <LinkBlock
          class={
            "footer__mid--linkblock footer__mid--linkblock--first"
          }
          link_1={"News"}
          link_2={"Blog"}
          link_3={"Partners"}
          link_4={"Shop"}
        />

        <LinkBlock
          class={
            "footer__mid--linkblock footer__mid--linkblock--second"
          }
          link_1={"Overview"}
          link_2={"Design"}
          link_3={"Code"}
          link_4={"Collaborate"}
        />

        <LinkBlock
          class={
            "footer__mid--linkblock footer__mid--linkblock--third"
          }
          link_1={"Tutorials"}
          link_2={"Resources"}
          link_3={"Guides"}
          link_4={"Examples"}
        />

        <LinkBlock
          class={
            "footer__mid--linkblock footer__mid--linkblock--last"
          }
          link_1={"FAQ"}
          link_2={"Terms"}
          link_3={"Conditions"}
          link_4={"Help"}
        />
      </div>
      <div className="footer__bot">
        <p className="footer__bot--copy p-3">
          &copy; abz.agency specially for the test task
        </p>
        <div className="footer__bot--social">
          <Facebook className="footer__bot--svg" />
          <LinkedIn className="footer__bot--svg" />
          <Instagram className="footer__bot--svg" />
          <Twitter className="footer__bot--svg" />
          <Pinterest className="footer__bot--svg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
