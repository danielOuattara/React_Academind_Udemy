import { Component } from "react";
import classes from "./Users.module.css";
import User from "./User";

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUsers: true,
    };
  }

  // try/catch cans be used to handle error in the same code.
  // But how to catch an error in this component and send it
  // to another parent for error handling ?
  // Solution: create an ErrorBoundary component

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No users provided !");
    }
  }

  toggleUsersHandler = () => {
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
  };

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
