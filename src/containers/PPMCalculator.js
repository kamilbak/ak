import * as React from "react";
import { connect } from "react-redux";
import { addWaterTest } from "../store/actions/waterTests";

import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

class PPMCalcuator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      dropdownOpen: false,
      aquariumVolumeNet: "260" // 260
    };
    this.elements = ["n", "p", "k", "fe", "mg"];
    this.salts = [
      {
        name: "kno3",
        elements: [
          { name: "n", percentIn: "61" },
          { name: "k", percentIn: "38.7" }
        ]
      },
      {
        name: "kh2po4",
        elements: [
          { name: "p", percentIn: "69.8" },
          { name: "k", percentIn: "28.7" }
        ]
      },
      {
        name: "k2so4",
        elements: [{ name: "k", percentIn: "44.83" }]
      },
      {
        name: "microchelatFe8",
        elements: [{ name: "fe", percentIn: "8" }]
      },
      {
        name: "mgso47h2o",
        elements: [{ name: "mg", percentIn: "9.9" }]
      }
    ];
  }

  handleDropdownToggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  handleTestChange = event => {
    let onlyNumDot = event.target.value.replace(/[^0-9.]/g, "");
    if (onlyNumDot.split(".").length > 2) {
      onlyNumDot = onlyNumDot.replace(/\.+$/, "");
    }
    this.setState({
      [event.target.name]: onlyNumDot
    });
  };

  calculateSaltAmmount = (elementValue, saltNum) => {
    return (
      (elementValue * this.state.aquariumVolumeNet) /
      (this.salts[saltNum].elements[0].percentIn * 10)
    );
  };

  calculateExtraElementPpm = (saltAmount, saltNum) => {
    // !! posible bad calculation for extraElementAmount
    if (saltNum !== undefined) {
      return (
        (this.salts[saltNum].elements[1].percentIn * saltAmount * 10) /
        this.state.aquariumVolumeNet
      );
    }
  };

  roundedToTwo = number => {
    return Math.round(number * 100) / 100;
  };

  showRecipe = (
    elementValue,
    elementName,
    saltAmount,
    saltNum,
    extraElementAmount
  ) => {
    console.log(
      "To add",
      elementValue,
      "PPM of",
      elementName.toUpperCase(),
      "you have to add",
      this.roundedToTwo(saltAmount),
      "g of",
      this.salts[saltNum].name.toUpperCase()
    );
    if (extraElementAmount !== undefined) {
      console.log(
        "Additionaly you will add",
        this.roundedToTwo(extraElementAmount),
        "PPM of K"
      );
    }
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
      if (element.name === "n") {
        const saltNum = 0;
        const saltAmount = this.calculateSaltAmmount(element.value, saltNum);

        // posible bad calculation for extraElementAmount
        const extraElementAmount = this.calculateExtraElementPpm(
          saltAmount,
          saltNum
        );

        this.showRecipe(
          element.value,
          element.name,
          saltAmount,
          saltNum,
          extraElementAmount
        );
      }
      if (element.name === "p") {
        const saltNum = 1;
        const saltAmount = this.calculateSaltAmmount(element.value, saltNum);

        // posible bad calculation for extraElementAmount
        const extraElementAmount = this.calculateExtraElementPpm(
          saltAmount,
          saltNum
        );

        this.showRecipe(
          element.value,
          element.name,
          saltAmount,
          saltNum,
          extraElementAmount
        );
      }
      if (element.name === "k") {
        const saltNum = 2;
        const saltAmount = this.calculateSaltAmmount(element.value, saltNum);

        this.showRecipe(element.value, element.name, saltAmount, saltNum);
      }
      if (element.name === "fe") {
        const saltNum = 3;
        const saltAmount = this.calculateSaltAmmount(element.value, saltNum);

        this.showRecipe(element.value, element.name, saltAmount, saltNum);
      }
      if (element.name === "mg") {
        const saltNum = 4;
        const saltAmount = this.calculateSaltAmmount(element.value, saltNum);

        this.showRecipe(element.value, element.name, saltAmount, saltNum);
      }
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
            value: ""
          }
        ]
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
      })
    }));
  };

  render() {
    // console.warn("state", this.state);
    return (
      <div>
        <p>
          Your aquarium volume net is <b>{this.state.aquariumVolumeNet}l</b>
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

export default PPMCalcuator;
