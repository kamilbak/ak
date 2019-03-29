import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../store/actions/authActions";
import { withRouter } from "react-router-dom";

import { Nav, NavItem, NavLink, Button } from "reactstrap";

import { Menu } from "semantic-ui-react";

class NavigationBar extends Component {
  handleLogOutButton = e => {
    e.preventDefault();
    this.props.logOut();
  };

  render() {
    // ROUTE GUARDING
    // redirections for all pages
    //  !!need refactor to https://tylermcginnis.com/react-router-protected-routes-authentication/

    const { logInStatus, location } = this.props;
    // console.warn("logInStatus", logInStatus);
    // console.warn("this.props.location.pathname", location.pathname);
    if (logInStatus && location.pathname === "/log-in") {
      console.info("you're logged in, redirect from", location.pathname);
      return <Redirect to="/" />;
    }
    if (
      !logInStatus &&
      location.pathname !== "/log-in" &&
      location.pathname !== "/"
    ) {
      console.info("you're logged out, redirect from", location.pathname);
      return <Redirect to="/" />;
    }

    let links;
    if (logInStatus) {
      links = (
        <div>
          <Menu>
            <Menu.Item as={Link} name="home" to="/">
              Home
            </Menu.Item>

            <Menu.Menu position="right">
              <Menu.Item name="signup" onClick={this.handleLogOutButton}>
                Sign Up
              </Menu.Item>
            </Menu.Menu>
          </Menu>

          <Nav>
            <NavItem>
              <NavLink tag={Link} to="/add-aquarium">
                Add new aquarium
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/add-water-test">
                Add water test
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/show-water-tests">
                Show water tests
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/ppm-calculator">
                PPM Calculator
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/edit-aquarium">
                Edit aquarium
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/add-aquarium-event">
                Add aquarium event
              </NavLink>
            </NavItem>
          </Nav>
          <hr />
        </div>
      );
    } else {
      links = (
        <div>
          <Nav>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/log-in">
                Log In
              </NavLink>
            </NavItem>
          </Nav>
          <hr />
        </div>
      );
    }

    return <div>{links}</div>;
  }
}

const mapStateToProps = state => {
  // console.log("navbar", state);
  return {
    logInStatus: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut()),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavigationBar)
);
