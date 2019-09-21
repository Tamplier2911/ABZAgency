import React from "react";

const UserFigure = props => {
  return (
    <figure
      className={`section-users__content--fig ${props.sClass}`}
    >
      <div className="section-users__content--imgc">
        <picture className="section-users__content--img">
          <source
            srcSet={`${props.imgMin} 1x, ${props.imgMax} 2x`}
            // media={props.breakpoint}
          ></source>
          <img
            srcSet={`${props.imgMin} 1x, ${props.imgMax} 2x`}
            alt="happy user"
            className="section-users__content--img"
            src={props.imgMin}
          ></img>
        </picture>
      </div>
      <h3 className="section-users__content--name h4-dtm">
        {props.name}
      </h3>
      <p className="section-users__content--pos p-3">
        {props.position}
      </p>
      <p className="section-users__content--mail p-3">
        {props.email}
      </p>
      <p className="section-users__content--phone p-3">
        {props.phone}
      </p>
    </figure>
  );
};

export default UserFigure;
