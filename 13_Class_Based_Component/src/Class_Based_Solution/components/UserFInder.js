// import { Fragment, useState, useEffect } from "react";
// import Users from "./Users";
// import classes from "./UserFinder.module.css";

// const DUMMY_USERS = [
//   { id: "u1", name: "Max" },
//   { id: "u2", name: "Manuel" },
//   { id: "u3", name: "Julie" },
// ];

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <dir className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </dir>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

// export default UserFinder;

//-------------------------------------------------------------

import { Component, Fragment } from "react";
import Users from "./Users";
import classes from "./UserFinder.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

export class UserFInder extends Component {
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
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  render() {
    return (
      <Fragment>
        <dir className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler} />
        </dir>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

export default UserFInder;
