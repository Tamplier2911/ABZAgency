import "../sass/SectionRegister.scss";
import React, { Component } from "react";
import Modal from "./Modal";

// Business Logic of Form
import FormContext from "../contexts/FormContext";

class SectionRegister extends Component {
  static contextType = FormContext;

  renderSubmit() {
    if (this.context.formValid) {
      return (
        <input
          className="section-register__form--submit btn btn-primary"
          value="Sign Up"
          type="submit"
        ></input>
      );
    } else {
      return (
        <input
          className="section-register__form--submit btn btn-disabled"
          value="Sign Up"
          type="submit"
          disabled
        ></input>
      );
    }
  }

  renderModal() {
    if (this.context.registration) {
      return (
        <Modal desc={this.context.registration_message} />
      );
    } else {
      return (
        <Modal desc={this.context.registration_message} />
      );
    }
  }

  renderPosition(pos) {
    if (this.context.positions) {
      return this.context.positions[pos];
    } else {
      return "Loading...";
    }
  }

  render() {
    // console.log(this.props);
    // console.log(this.state);
    // console.log(this.context);
    return (
      <section
        className="section-register"
        id="registration"
      >
        {this.renderModal()}
        <h2 className="section-register__header1">
          Register to get a work
        </h2>
        <h5 className="section-register__header2">
          Attention! After successful registration and
          alert, update the list of users in the block from
          the top
        </h5>
        <form
          className="section-register__form"
          onSubmit={this.context.onSubmit}
        >
          <input
            className="section-register__form--name"
            type="text"
            name="name"
            placeholder="Your name"
            value={this.context.name}
            id="form-name"
            autoComplete="off"
            // required
            onChange={this.context.onInputChange}
          ></input>
          <label
            className="section-register__form--name-l"
            htmlFor="form-name"
          >
            Name
          </label>
          <label className="section-register__form--name-e">
            {this.context.formErrors.name}
          </label>

          <input
            className="section-register__form--email"
            type="email"
            name="email"
            placeholder="Your email"
            value={this.context.email}
            id="form-email"
            autoComplete="off"
            // required
            onChange={this.context.onInputChange}
          ></input>
          <label
            className="section-register__form--email-l"
            htmlFor="form-email"
          >
            Email
          </label>
          <label className="section-register__form--email-e">
            {this.context.formErrors.email}
          </label>

          <input
            className="section-register__form--phone"
            type="tel"
            name="phone"
            placeholder="+38(__) ___ __ __"
            value={this.context.phone}
            id="form-phone"
            pattern="^\+?3?8?(0\d{9})$"
            autoComplete="off"
            // required
            onChange={this.context.onInputChange}
          ></input>
          <label
            className="section-register__form--phone-l"
            htmlFor="form-phone"
          >
            Phone
          </label>
          <label className="section-register__form--phone-e">
            {this.context.formErrors.phone}
          </label>

          <select
            className="section-register__form--select"
            name="position"
            onChange={this.context.onInputChange}
          >
            <option
              className="section-register__form--select-1"
              value="1"
            >
              {this.renderPosition(1)}
            </option>
            <option
              className="section-register__form--select-1"
              value="2"
            >
              {this.renderPosition(2)}
            </option>
            <option
              className="section-register__form--select-1"
              value="3"
            >
              {this.renderPosition(3)}
            </option>
            <option
              className="section-register__form--select-1"
              value="4"
            >
              {this.renderPosition(4)}
            </option>
          </select>

          <label
            className="section-register__form--file-label"
            htmlFor="file-upload"
          >
            <div className="section-register__form--file-btn">
              Upload
            </div>
            <div className="section-register__form--file-btn-phone"></div>
            <div
              className="section-register__form--file-text"
              onClick={e => e.preventDefault()}
            >
              Upload your photo
            </div>
            <p className="section-register__form--file-limit">
              File format jpg up to 5MB, the minimum size of
              70x70px
            </p>
          </label>
          <input
            className="section-register__form--file"
            id="file-upload"
            type="file"
            required
            name="photo"
            onChange={this.context.onInputChange}
          />

          {this.renderSubmit()}
        </form>
      </section>
    );
  }
}

export default SectionRegister;
