import * as React from "react";
import { connect } from "react-redux";

import AddEditAquarium from "../components/AddEditAquarium";

class AddAquarium extends React.Component {
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
        <AddEditAquarium type="add" />
      </div>
    );
  }
}

export default AddAquarium;
