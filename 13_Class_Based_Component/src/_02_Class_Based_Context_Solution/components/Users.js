// import { Component } from "react";
// import classes from "./Users.module.css";
// import SingleUser from "./SingleUser";
// import { UserContext } from "../context/UserContext";

// export class Users extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showUsers: true,
//     };
//   }

//   toggleUsersHandler = () => {
//     this.setState((prevState) => {
//       return { showUsers: !prevState.showUsers };
//     });
//   };

//   static contextType =  UserContext;

//   render() {

//     const {filteredUsers} = this.context;
//     const usersList = (
//       <ul>
//         {filteredUsers.map((user) => (
//           <SingleUser key={user.id} name={user.name} />
//         ))}
//       </ul>
//     );
//     return (
//       <div className={classes.users}>
//         <button onClick={this.toggleUsersHandler}>
//           {this.state.showUsers ? "Hide" : "Show"} Users
//         </button>
//         {this.state.showUsers && usersList}
//       </div>
//     );
//   }
// }

// export default Users;

import { Component } from "react";
import classes from "./Users.module.css";
import SingleUser from "./SingleUser";
import { UserContext } from "../context/UserContext";

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUsers: true,
    };
  }

  toggleUsersHandler = () => {
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
  };

  static contextType = UserContext;

  render() {
    const usersList = (
      <UserContext.Consumer>
        {(context) => {
          const { filteredUsers } = context;
          return (
            <ul>
              {filteredUsers.map((user) => (
                <SingleUser key={user.id} name={user.name} />
              ))}
            </ul>
          );
        }}
      </UserContext.Consumer>
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
