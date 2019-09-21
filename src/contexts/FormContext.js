import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext({});

export class FormStore extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    position: "1",
    photo: null,
    nameValid: false,
    emailValid: false,
    phoneValid: false,
    positionValid: true,
    photoValid: false,
    formValid: false,
    formErrors: {
      name: "",
      email: "",
      phone: "",
      id: "",
      photo: ""
    },

    registration: false,
    registration_message: "",

    token: null,

    positions: undefined
  };

  // Form Validator
  validateField(fieldName, value) {
    let validationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;
    let positionValid = this.state.positionValid;
    let photoValid = this.state.photoValid;

    switch (fieldName) {
      case "name":
        if (value.length > 2 && value.length < 61) {
          nameValid = true;
        }
        validationErrors.name = nameValid
          ? ""
          : "Input is too short.";
        break;
      case "email":
        if (
          value.match(
            /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
          ) &&
          value.length > 2 &&
          value.length < 101
        ) {
          emailValid = true;
        }
        validationErrors.email = emailValid
          ? ""
          : "Email should match.";
        break;
      case "phone":
        if (value.match(/^[\+]{0,1}380([0-9]{9})$/)) {
          phoneValid = true;
        }
        validationErrors.phone = phoneValid
          ? ""
          : "Phone should match.";
        break;
      case "position":
        if (
          typeof value === "string" &&
          String(value).length === 1
        ) {
          // change type to number when perform POST
          positionValid = true;
        }
        validationErrors.id = positionValid
          ? ""
          : "ID dosen't match.";
        break;
      case "photo":
        if (
          value.type === ("image/jpeg" || "image/jpg") &&
          value.size < 5000000
        ) {
          photoValid = true;
        }
        validationErrors.photo = photoValid
          ? ""
          : "Photo doesn't meet requirements.";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: validationErrors,
        nameValid: nameValid,
        emailValid: emailValid,
        phoneValid: phoneValid,
        positionValid: positionValid,
        photoValid: photoValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.nameValid &&
        this.state.emailValid &&
        this.state.phoneValid &&
        this.state.positionValid &&
        this.state.photoValid
    });
  }

  // On Input Change Trigger
  onInputChange = e => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "photo") {
      value = e.target.files[0];
      this.setState({ [name]: value }, () => {
        this.validateField(name, value);
      });
    } else if (name === "position") {
      this.setState({ [name]: value }, () => {
        this.validateField(name, Number(value));
      });
    } else {
      this.setState({ [name]: value }, () => {
        this.validateField(name, value);
      });
    }
  };

  // API REQUESTS /////////////////////////////////////

  componentDidMount() {
    // Get Positions
    const fetchPositions = async () => {
      const response = await axios.get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/positions`
      );
      const positions = response.data.positions;

      const map = {};
      for (let el of positions) {
        map[el.id] = el.name;
      }
      this.setState({ positions: map });
      // console.log(this.state.positions);
    };
    fetchPositions();

    // Get Token (I decided to put token request here, because of submit had very slow performance)

    const requestToken = async () => {
      const response = await axios.get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/token`
      );
      const token = response.data.token;
      this.setState({ token: token });
    };
    requestToken();
  }

  // On Submit Logic
  onSubmit = e => {
    e.preventDefault();
    // console.log("Submitted!");

    const formSubmit = async () => {
      const fd = new FormData();
      fd.set("position_id", this.state.position);
      fd.set("name", this.state.name);
      fd.set("email", this.state.email);
      fd.set("phone", this.state.phone);
      fd.append("photo", this.state.photo);

      try {
        const submitted = await axios({
          method: "post",
          url:
            "https://frontend-test-assignment-api.abz.agency/api/v1/users",
          data: fd,
          headers: {
            Token: this.state.token
          }
        });

        // console.log("All worked well!", submitted);
        if (
          submitted.status === 200 ||
          submitted.status === 201
        ) {
          this.setState({
            registration: true,
            registration_message:
              "You are successfully registred!"
          });
          document.querySelector(".modal").style.display =
            "grid";
        } else {
          this.setState({
            registration: false,
            registration_message:
              "Some error occured, please try again!"
          });
          document.querySelector(".modal").style.display =
            "grid";
        }
        this.setState({
          name: "",
          email: "",
          phone: "",
          position: "1",
          nameValid: false,
          emailValid: false,
          phoneValid: false,
          positionValid: true,
          formValid: false
        });
      } catch (err) {
        // console.log("Some error occured!");
        this.setState({
          name: "",
          email: "",
          phone: "",
          position: "1",
          nameValid: false,
          emailValid: false,
          phoneValid: false,
          positionValid: true,
          formValid: false
        });
      }
    };
    formSubmit();
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          onInputChange: this.onInputChange,
          onSubmit: this.onSubmit
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
