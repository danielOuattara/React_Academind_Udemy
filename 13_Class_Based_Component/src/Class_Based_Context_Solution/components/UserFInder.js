import { Component, Fragment } from "react";
import Users from "./Users";
import classes from "./UserFinder.module.css";
import { UserContext } from "../../Class_Based_Context_Solution/context/UserContext";

export class UserFInder extends Component {
  static contextType = UserContext;

  render() {
    const { searchChangeHandler } = this.context
    return (
      <Fragment>
        <dir className={classes.finder}>
          <input type="search" onChange={searchChangeHandler} />
        </dir>
        <Users />
      </Fragment>
    );
  }
}

export default UserFInder;
