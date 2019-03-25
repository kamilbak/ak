import * as React from "react";
import { connect } from "react-redux";

import AddEditAquariumEvent from "../../components/AddEditAquariumEvent";

class AddAquariumEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      volumeGross: "",
      volumeNet: "",
      description: "",
      plants: "",
      animals: ""
    };
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
    return (
      <div>
        <AddEditAquariumEvent type="add" />
      </div>
    );
  }
}

export default AddAquariumEvent;
