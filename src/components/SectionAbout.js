import "../sass/SectionAbout.scss";
import React from "react";
import { ReactComponent as SVG } from "../images/man-mobile.svg";
import { ReactComponent as CSS } from "../images/css.svg";
import { ReactComponent as HTML } from "../images/html.svg";
import { ReactComponent as JAVA } from "../images/javascript.svg";

const SectionAbout = () => {
  return (
    <section className="section-about" id="about">
      <div className="section-about__top">
        <h2 className="section-about__top--header1">
          Let's get acquainted
        </h2>
        <SVG className="section-about__top--svg" />
        <div className="section-about__top--content">
          <h3 className="section-about__top--header2">
            I am cool frontend developer
          </h3>
          <p className="section-about__top--p p-2 section-about__top--p-1">
            When real users have a slow experience on
            mobile, they're much less likely to find what
            they are looking for or{" "}
            <br className="br-large"></br>purchase from you
            in the future. For many sites this equates to a
            huge missed opportunity, especially when more{" "}
            <br className="br-large"></br>than half of
            visits are abandoned if a mobile{" "}
            <br className="br-desk"></br> page takes over 3
            seconds to load.
          </p>
          <p className="section-about__top--p p-2 section-about__top--p-2">
            Last week, Google Search and Ads teams announced
            two new speed initiatives to help improve
            user-experience on the web.
          </p>
          <a href="/" className="section-about__top--link">
            Sign Up
          </a>
        </div>
      </div>
      <div
        className="section-about__bottom"
        id="relationships"
      >
        <h2 className="section-about__bottom--header1">
          About my relationships with web-development
        </h2>
        <div className="section-about__bottom--content">
          <figure className="section-about__bottom--figure">
            <HTML className="section-about__bottom--svg" />
            <h3 className="section-about__bottom--heading2">
              I'm in love with HTML
            </h3>
            <p
              className="section-about__bottom--p p-2 
              section-about__bottom--p-auxiliary1"
            >
              Hypertext Markup Language (HTML) is the
              standard markup language for creating{" "}
              <br className="br-desk"></br>web pages and web
              applications.
            </p>
          </figure>
          <figure className="section-about__bottom--figure">
            <CSS className="section-about__bottom--svg" />
            <h3 className="section-about__bottom--heading2">
              CSS is my best friend
            </h3>
            <p
              className="section-about__bottom--p p-2 
              section-about__bottom--p-auxiliary2"
            >
              Cascading Style Sheets (CSS)
              <br className="br-desk"></br> is a style sheet{" "}
              <br className="br-large"></br>
              language used for<br className="br-desk"></br>{" "}
              describing the presentation{" "}
              <br className="br-large"></br>
              of a<br className="br-desk"></br> document
              written in a markup
              <br className="br-desk"></br> language{" "}
              <br className="br-large"></br>
              like HTML.
            </p>
          </figure>
          <figure className="section-about__bottom--figure">
            <JAVA className="section-about__bottom--svg" />
            <h3 className="section-about__bottom--heading2">
              JavaScript is my passion
            </h3>
            <p
              className="section-about__bottom--p p-2 
              section-about__bottom--p-auxiliary3"
            >
              JavaScript is a high-level, interpreted
              programming language. It is a language which
              is also characterized{" "}
              <br className="br-large"></br>
              as dynamic, weakly typed, prototype-based and{" "}
              <br className="br-large"></br>
              <br className="br-desk"></br>multi-paradigm.
            </p>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
