import classes from "./User.module.css";
import { Component } from "react/cjs/react.production.min";

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
