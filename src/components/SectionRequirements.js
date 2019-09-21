import "../sass/SectionRequirements.scss";
import React from "react";
import { ReactComponent as Icon } from "../images/man-laptop-v1.svg";

const SectionRequirements = () => {
  return (
    <section className="section-requirements" id="requirements">
      <h1 className="section-requirements__header">General requirements for the test task</h1>
      <div className="section-requirements__content">
        <p className="section-requirements__content--p1 p-2">
          Users want to find answers to their questions quickly and data shows that people{" "}
          <br className="br-large"></br>
          really care about how quickly their pages load. The Search team announced speed <br className="br-large"></br>
          would be a ranking signal for desktop searches in 2010 and as of this month (July{" "}
          <br className="br-large"></br>
          2018), page speed will be a ranking factor for mobile searches too.
        </p>
        <p className="section-requirements__content--p2 p-2">
          If you're a developer working on a site, now is a good time to evaluate your <br className="br-large"></br>
          performance using our speed tools. Think about how performance affects the user <br className="br-large"></br>
          experience of your pages and consider measuring a variety of real-world <br className="br-large"></br>
          user-centric performance metrics.
        </p>
        <p className="section-requirements__content--p3 p-2">
          Are you shipping too much JavaScript? Too many images? Images and JavaScript <br className="br-large"></br>
          are the most significant contributors to the page weight that affect page load time{" "}
          <br className="br-large"></br>
          based on data from HTTP Archive and the Chrome User Experience Report - our <br className="br-large"></br>
          public dataset for key UX metrics as epxerienced by Chrome users under real-world{" "}
          <br className="br-desk"></br>
          <br className="br-large"></br>
          conditions.
        </p>
      </div>
      <Icon className="section-requirements__svg" />
    </section>
  );
};

export default SectionRequirements;
