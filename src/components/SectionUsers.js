import "../sass/SectionUsers.scss";
import React, { Component } from "react";
import UserFigure from "./UserFigure";

// Business Logic of Users
import UsersContext from "../contexts/UsersContext";

import noah from "../images/user-noah-2x.jpg";
import noah_min from "../images/user-noah-1x.jpg";

import adolph from "../images/user-adolph-2x.jpg";
import adolph_min from "../images/user-adolph-1x.jpg";

import liam from "../images/user-liam-2x.jpg";
import liam_min from "../images/user-liam-1x.jpg";

import eli from "../images/user-elizabeth-2x.jpg";
import eli_min from "../images/user-elizabeth-1x.jpg";

import alex from "../images/user-alexander-2x.jpg";
import alex_min from "../images/user-alexander-1x.jpg";

import mason from "../images/user-mason-2x.jpg";
import mason_min from "../images/user-mason-1x.jpg";

class SectionUsers extends Component {
  static contextType = UsersContext;

  // Rendering users on screen
  renderUsers = () => {
    if (this.context.users) {
      return this.context.users
        .sort(
          (a, b) =>
            b.registration_timestamp -
            a.registration_timestamp
        )
        .map(user => {
          return (
            <UserFigure
              key={user.id}
              imgMin={user.photo}
              imgMax={user.photo}
              name={user.name}
              position={user.position}
              email={user.email}
              phone={user.phone}
            />
          );
        });
    } else {
      // Implement loading spinner
    }
  };

  renderMore() {
    if (this.context.page === this.context.totalPages) {
      // If reach last page render that
    } else {
      // Else render this
      return (
        <button
          className="section-users__content--more btn btn-secondary"
          onClick={this.context.onMoreClick}
        >
          Show more
        </button>
      );
    }
  }

  render() {
    // console.log(this.context);
    return (
      <section className="section-users" id="users">
        <div className="section-users__content">
          <h2 className="section-users__content--header1">
            Our cheerful users
          </h2>
          <h5 className="section-users__content--header2">
            Attention! Sorting users by registration date
          </h5>
          <div className="section-users__content--users">
            <UserFigure
              imgMin={noah_min}
              imgMax={noah}
              sClass={"noah"}
              name={"Noah"}
              position={
                "Leading specialist of the Control Department"
              }
              email={"noah.controldepartment@gmail.com"}
              phone="+38 (050) 678 03 24"
            />

            <UserFigure
              imgMin={adolph_min}
              imgMax={adolph}
              sClass={"adolph"}
              name={"Adolph Blaine Charles David Earl"}
              position={
                "The contextual advertising specialist"
              }
              email={
                "adloph.blainecharles-daviddearl@example.com"
              }
              phone="+38 (095) 556 08 45"
            />

            <UserFigure
              imgMin={liam_min}
              imgMax={liam}
              sClass={"liam"}
              name={"Liamgrievescasey Smith Wiam"}
              position={"Lead designer"}
              email={"liamgrievescasey@example.com"}
              phone="+38 (050) 273 93 32"
            />

            <UserFigure
              imgMin={eli_min}
              imgMax={eli}
              sClass={"eli"}
              name={"Elizabeth"}
              position={"Frontend developer"}
              email={"elisabet.frontend@gmail.com"}
              phone="+38 (095) 924 66 37"
            />

            <UserFigure
              imgMin={alex_min}
              imgMax={alex}
              sClass={"alex"}
              name={"Alexander"}
              position={"Backend developer"}
              email={"alexander.backend@gmail.com"}
              phone="+38 (050) 789 24 04"
            />

            <UserFigure
              imgMin={mason_min}
              imgMax={mason}
              sClass={"mas"}
              name={"Mason"}
              position={"QA"}
              email={"mason.qa@gmail.com"}
              phone="+38 (095) 283 27 00"
            />

            {this.renderUsers()}
          </div>
          {this.renderMore()}
        </div>
      </section>
    );
  }
}

export default SectionUsers;
