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

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  height: calc(2.25rem + 2px);
  background: transparent;
  border-radius: 3px;
  border: 1px solid #ced4da;
  color: #212529;
  padding: 0.25em 0.7em;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

class AddWaterTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testDate: new Date(),
      testNo3: "",
      testPo4: "",
      testK: "",
      testMg: "",
      testCa: "",
      testFe: "",
      testKh: "",
      testGh: "",
      ratioNPK: "",
      ratioCaMgK: ""
    };
  }

  componentDidUpdate(prevProps, prevState) {}

  handleDatePickerChange = testDate => {
    this.setState({
      testDate
    });
  };

  handleTestChange = event => {
    let onlyNumDot = event.target.value.replace(/[^0-9.]/g, "");
    if (onlyNumDot.split(".").length > 2) {
      onlyNumDot = onlyNumDot.replace(/\.+$/, "");
    }
    this.setState(
      {
        [event.target.name]: onlyNumDot
      },
      () => {
        this.calculateNPKRatios();
        this.calculateCaMgKRatios();
      }
    );
  };

  handleBtnClick = () => {
    this.calculateNPKRatios();
    this.calculateCaMgKRatios();
    // temporary, for firebase timestamp
    let stateToDispatch = {
      ...this.state,
      testDate: this.state.testDate.toLocaleDateString("en-GB")
    };
    this.props.dispatch(addWaterTest(stateToDispatch));
  };

  calculateNPKRatios = () => {
    const n = this.state.testNo3;
    const p = this.state.testPo4;
    const k = this.state.testK;
    if (n && p && k) {
      const divisor = 1 / p;
      function roundedToOne(number) {
        return Math.round(number * 10) / 10;
      }
      const ratioNPK = `${roundedToOne(n * divisor)}
      :1:
      ${roundedToOne(divisor * k)}`;

      this.setState({
        ratioNPK
      });
    }
  };

  calculateCaMgKRatios = () => {
    const ca = this.state.testCa;
    const mg = this.state.testMg;
    const k = this.state.testK;
    if (ca && mg && k) {
      const divisor = 1 / mg;
      function roundedToOne(number) {
        return Math.round(number * 10) / 10;
      }
      const ratioCaMgK = `${roundedToOne(ca * divisor)}
      :1:
      ${roundedToOne(divisor * k)}`;

      this.setState({
        ratioCaMgK
      });
    }
  };

  clearStateAfterClick = () => {
    this.setState({
      testDate: new Date(),
      testNo3: "",
      testPo4: "",
      testK: "",
      testMg: "",
      testCa: "",
      testFe: "",
      testKh: "",
      testGh: "",
      ratioNPK: "",
      ratioCaMgK: ""
    });
  };

  render() {
    return (
      <div>
        <Form>
          <Row form>
            <Col xs={3}>
              <FormGroup>
                <Label for="">Test date</Label>
                <StyledDatePicker
                  selected={this.state.testDate}
                  onChange={this.handleDatePickerChange}
                  dateFormat="dd/MM/yyyy"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col xs={2}>
              <FormGroup>
                <Label for="">N</Label>
                <Input
                  type="text"
                  name="testNo3"
                  id=""
                  value={this.state.testNo3}
                  onChange={this.handleTestChange}
                />
              </FormGroup>
            </Col>
            <Col xs={2}>
              <FormGroup>
                <Label for="">P</Label>
                <Input
                  type="text"
                  name="testPo4"
                  id=""
                  value={this.state.testPo4}
                  onChange={this.handleTestChange}
                />
              </FormGroup>
            </Col>
            <Col xs={2}>
              <FormGroup>
                <Label for="">K</Label>
                <Input
                  type="text"
                  name="testK"
                  id=""
                  value={this.state.testK}
                  onChange={this.handleTestChange}
                />
              </FormGroup>
            </Col>
            <Col xs={3}>
              <FormGroup>
                <Label for="">NPK 10:1:20</Label>
                <p>{this.state.ratioNPK}</p>
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col xs={2}>
              <FormGroup>
                <Label for="">Mg</Label>
                <Input
                  type="text"
                  name="testMg"
                  id=""
                  value={this.state.testMg}
                  onChange={this.handleTestChange}
                />
              </FormGroup>
            </Col>
            <Col xs={2}>
              <FormGroup>
                <Label for="">Ca</Label>
                <Input
                  type="text"
                  name="testCa"
                  id=""
                  value={this.state.testCa}
                  onChange={this.handleTestChange}
                />
              </FormGroup>
            </Col>
            <Col xs={2} />
            <Col xs={3}>
              <FormGroup>
                <Label for="">CaMgK 4:1:3</Label>
                <p>{this.state.ratioCaMgK}</p>
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col xs={2}>
              <FormGroup>
                <Label for="">Fe</Label>
                <Input
                  type="text"
                  name="testFe"
                  id=""
                  value={this.state.testFe}
                  onChange={this.handleTestChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col xs={2}>
              <FormGroup>
                <Label for="">Kh</Label>
                <Input
                  type="text"
                  name="testKh"
                  id=""
                  value={this.state.testKh}
                  onChange={this.handleTestChange}
                />
              </FormGroup>
            </Col>
            <Col xs={2}>
              <FormGroup>
                <Label for="">Gh</Label>
                <Input
                  type="text"
                  name="testGh"
                  id=""
                  value={this.state.testGh}
                  onChange={this.handleTestChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Button onClick={this.handleBtnClick}>Add Test</Button>
        </Form>
      </div>
    );
  }
}

export default connect()(AddWaterTest);
