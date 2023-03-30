import { Component, createContext } from "react";

export const UserContext = createContext();

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

export class UserContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: "",
    };
  }
  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm),
        ),
      });
    }
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          filteredUsers: [...this.state.filteredUsers],
          searchChangeHandler: this.searchChangeHandler,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
