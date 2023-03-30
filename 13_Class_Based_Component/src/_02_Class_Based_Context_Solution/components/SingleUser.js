import { Component } from "react";
import classes from "./User.module.css";

export class SingleUser extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default SingleUser;
