import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext({});

export class UsersStore extends Component {
  state = {
    users: null,
    per: 6,
    page: 1,
    totalPages: null
  };

  // Trigger for Fetching Users
  onMoreClick = () => {
    this.fetchUsers()();
  };

  // Users Fetching Logic, triggered by onMoreClick
  fetchUsers() {
    return async () => {
      const { per, page, users } = this.state;
      let count = page;
      const response = await axios.get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${per}`
      );
      if (response.status === 200) {
        this.setState({
          totalPages: response.data.total_pages
        });
        const data = response.data.users;

        if (count < this.state.totalPages) {
          if (users) {
            this.setState({ users: [...users, ...data] });
          } else {
            this.setState({ users: [...data] });
          }

          // console.log(this.state);
          count++;
          this.setState({ page: count });
        } else {
          return null;
        }
      } else {
        // console.log(response.status);
      }
    };
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          onMoreClick: this.onMoreClick
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
