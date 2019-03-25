import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import WaterTestsTable from "../components/WaterTestsTable";

class ShowWaterTests extends Component {
  render() {
    return (
      <div>
        <WaterTestsTable testsData={this.props.testsData} />
        <hr />
        <pre>{JSON.stringify(this.props.testsData, null, 2)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    testsData: state.firestore.ordered.tests
  };
};

// export default connect(mapStateToProps)(ShowWaterTests);
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "tests" }])
)(ShowWaterTests);
