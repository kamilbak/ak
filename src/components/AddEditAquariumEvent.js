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

class AddEditAquariumEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDate: new Date(),
      eventDescription: ""
    };
  }

  handleDatePickerChange = eventDate => {
    this.setState({
      eventDate
    });
  };

  handleEventDescriptionChange = event => {
    const eventDescription = event.target.value;
    this.setState({
      eventDescription
    });
  };

  handleBtnClick = () => {
    this.props.dispatch(addWaterTest(this.state));
  };

  clearStateAfterClick = () => {
    this.setState({
      testDate: new Date(),
      eventDescription: ""
    });
  };

  render() {
    return (
      <div>
        <Form>
          <Row form>
            <Col xs={3}>
              <FormGroup>
                <Label for="">Event date</Label>
                <StyledDatePicker
                  selected={this.state.eventDate}
                  onChange={this.handleDatePickerChange}
                />
              </FormGroup>
            </Col>
            <Col xs={9}>
              <FormGroup>
                <Label for="">Event description</Label>
                <Input
                  type="textarea"
                  name="eventDescription"
                  id=""
                  value={this.state.eventDescription}
                  onChange={this.handleEventDescriptionChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Button onClick={this.handleBtnClick}>Add event</Button>
        </Form>
      </div>
    );
  }
}

export default connect()(AddEditAquariumEvent);
