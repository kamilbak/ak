import * as React from "react";
import { connect } from "react-redux";
import { logIn } from "../../store/actions/authActions";

import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

class LogIn extends React.Component {
  state = { email: "", password: "" };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleLogInButton = e => {
    e.preventDefault();
    this.props.logIn(this.state);
  };

  render() {
    const { authError } = this.props;
    return (
      <div>
        <hr />
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Email
            </Label>
            <Input
              onChange={this.handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="email@domain.com"
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">
              Password
            </Label>
            <Input
              onChange={this.handleChange}
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </FormGroup>
          <Button onClick={this.handleLogInButton}>Log in</Button>
        </Form>
        <div> {authError ? <p>{authError}</p> : null}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: creds => dispatch(logIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
