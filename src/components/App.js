import "../sass/App.scss";
import React, { Component } from "react";
import Navigation from "./Navigation";
import SectionCTA from "./SectionCTA";
import SectionAbout from "./SectionAbout";
import SectionReqirements from "./SectionRequirements";
import SectionUsers from "./SectionUsers";
import SectionRegister from "./SectionRegister";
import Footer from "./Footer";

// Users State
import { UsersStore } from "../contexts/UsersContext";

// Registration State
import { FormStore } from "../contexts/FormContext";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Navigation />
        <SectionCTA />
        <SectionAbout />
        <SectionReqirements />
        <UsersStore>
          <SectionUsers />
        </UsersStore>
        <FormStore>
          <SectionRegister />
        </FormStore>
        <Footer />
      </main>
    );
  }
}

export default App;
