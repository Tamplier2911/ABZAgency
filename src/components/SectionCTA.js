import "../sass/SectionCTA.scss";
import React from "react";
import jump from "jump.js";

const onCtaClick = e => {
  e.preventDefault();
  jump("#registration");
};

const SectionCTA = () => {
  return (
    <section className="SectionCTA" id="cta">
      <div className="SectionCTA__content">
        <h1 className="SectionCTA__content--heading">
          Test assignment for Frontend Developer position
        </h1>
        <p className="SectionCTA__content--paragraph">
          We kindly remind you that your test assignment{" "}
          <br className="br-desk"></br>should{" "}
          <br className="br-large"></br>
          be submitted as a link to github/bitbucket{" "}
          <br className="br-desk"></br>repository.{" "}
          <br className="br-large"></br>
          Please be patient, we consider and{" "}
          <br className="br-desk"></br>respond to every
          application <br className="br-large"></br>
          that meets minimum <br className="br-desk"></br>
          requirements. We look forward to your{" "}
          <br className="br-large"></br>
          submission. <br className="br-desk"></br>Good
          luck!
        </p>
        <p className="SectionCTA__content--paragraph-mobile">
          We kindly remind you that your test assignment be
          submitted as a link to github/bitbucket
          repository.
        </p>
        <button
          className="SectionCTA__content--cta btn btn-primary"
          onClick={onCtaClick}
        >
          Sign Up
        </button>
      </div>
    </section>
  );
};

// &nbsp; &ensp; &emsp;

export default SectionCTA;
