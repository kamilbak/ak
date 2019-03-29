import * as React from "react";

import { onlyNumAndDot, calculateSalt } from "../utils";

import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";

class PPMCalcuator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      dropdownOpen: false,
    };
    this.elements = ["n", "p", "k", "fe", "mg"];
  }

  handleDropdownToggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  handleTestChange = event => {
    this.setState({
      [event.target.name]: onlyNumAndDot(event.target.value),
    });
  };

  showRecipe = (elementName, elementAmount, saltName, saltAmount) => {
    console.log(
      "To add",
      elementAmount,
      "PPM of",
      elementName.toUpperCase(),
      "you have to add",
      saltAmount,
      "g of",
      saltName.toUpperCase()
    );
  };

  handleCalculateElementsBtnClick = () => {
    if (this.state.elements.length === 0) {
      console.warn("no elements to calculate");
      return;
    }

    this.state.elements.map(element => {
      if (!element.value) {
        console.warn("nothing to calculate, value is empty");
        return;
      }

      const saltData = calculateSalt(
        element.name,
        element.value,
        this.props.aquariumVolumeNet
      );

      this.showRecipe(
        element.name,
        element.value,
        saltData.saltName,
        saltData.missingSaltAmount
      );
    });
  };

  addElement = event => {
    const element = event.target.name;
    this.setState(previousState => {
      return {
        elements: [
          ...previousState.elements,
          {
            name: element,
            value: "",
          },
        ],
      };
    });

    // delete used element from array
    var index = this.elements.indexOf(event.target.name);
    if (index > -1) {
      this.elements.splice(index, 1);
    }
  };

  changeElementValue = event => {
    const element = event.target.name;
    const value = event.target.value;
    this.setState(state => ({
      elements: state.elements.map(item => {
        if (item.name === element) return { ...item, value: value };
        return item;
      }),
    }));
  };

  render() {
    return (
      <div>
        <p>
          Your aquarium volume net is <b>{this.props.aquariumVolumeNet}l</b>
        </p>
        <p>What elements we want to add?</p>
        <ButtonDropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.handleDropdownToggle}
        >
          <DropdownToggle caret>Chose element</DropdownToggle>
          <DropdownMenu>
            {this.elements.length ? (
              ""
            ) : (
              <DropdownItem disabled>All elements are chosed</DropdownItem>
            )}
            {this.elements.map(element => (
              <DropdownItem
                key={element}
                name={element}
                onClick={this.addElement}
              >
                {element.toUpperCase()}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </ButtonDropdown>
        <Form>
          <br />
          <p>How much PPM we want to add?</p>
          <Row form>
            <Col xs={2}>
              <FormGroup>
                {this.state.elements.map(element => (
                  <div key={element.name} name={element}>
                    <Label for="">{element.name.toUpperCase()}</Label>
                    <Input
                      type="text"
                      name={element.name}
                      value={element.value}
                      id=""
                      onChange={this.changeElementValue}
                    />
                  </div>
                ))}
              </FormGroup>
            </Col>
          </Row>

          <Button onClick={this.handleCalculateElementsBtnClick}>
            Calculate elements
          </Button>
        </Form>
      </div>
    );
  }
}

PPMCalcuator.defaultProps = {
  aquariumVolumeNet: 260,
};

export default PPMCalcuator;
