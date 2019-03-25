import * as React from "react";
import { connect } from "react-redux";

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

class AddEditAquarium extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.type === "add") {
      this.state = {
        name: "",
        volumeGross: "",
        volumeNet: "",
        description: "",
        plants: "",
        animals: ""
      };
    } else {
      this.state = {
        name: this.props.name,
        volumeGross: this.props.volumeGross,
        volumeNet: this.props.volumeNet,
        description: this.props.description,
        plants: this.props.plants,
        animals: this.props.animals
      };
    }
  }

  handleBtnClick = () => {
    console.log("click");
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    let button;
    if (this.props.type === "add") {
      console.log("type add");
      button = <Button onClick={this.handleBtnClick}>Add new aquarium</Button>;
    } else {
      console.log("type edit and others");
      button = (
        <Button onClick={this.handleBtnClick}>Save aquarium edition</Button>
      );
    }

    return (
      <div>
        <Form>
          <Row form>
            <Col xs={12}>
              <FormGroup>
                <Label for="">Aquarium name</Label>
                <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  type="text"
                  name="name"
                  id=""
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <FormGroup>
                <Label for="">Aquarium volume gross</Label>
                <Input
                  value={this.state.volumeGross}
                  onChange={this.handleInputChange}
                  type="text"
                  name="volumeGross"
                  id=""
                />
              </FormGroup>
            </Col>
            <Col xs={6}>
              <FormGroup>
                <Label for="">Aquarium volume net</Label>
                <Input
                  value={this.state.volumeNet}
                  onChange={this.handleInputChange}
                  type="text"
                  name="volumeNet"
                  id=""
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <FormGroup>
                <Label for="">Aquarium description</Label>
                <Input
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  type="textarea"
                  name="description"
                  id="exampleText"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <FormGroup>
                <Label for="">Plants in aquarium</Label>
                <Input
                  value={this.state.plants}
                  onChange={this.handleInputChange}
                  type="textarea"
                  name="plants"
                  id=""
                />
              </FormGroup>
            </Col>
            <Col xs={6}>
              <FormGroup>
                <Label for="">Animals in aquarium</Label>
                <Input
                  value={this.state.animals}
                  onChange={this.handleInputChange}
                  type="textarea"
                  name="animals"
                  id=""
                />
              </FormGroup>
            </Col>
          </Row>

          {button}
        </Form>
      </div>
    );
  }
}

export default AddEditAquarium;
