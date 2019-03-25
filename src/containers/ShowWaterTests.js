import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import WaterTestsTable from "../components/WaterTestsTable";

class ShowWaterTests extends Component {
  render() {
    let sortedData = [];
    if (this.props.testsData) {
      sortedData = this.props.testsData.sort(function(b, a) {
        // '01/03/2014'.split('/')
        // gives ["01", "03", "2014"]
        a = a.testDa.split("/");
        b = b.testDate.split("/");
        return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
      });
    }

    return (
      <div>
        <WaterTestsTable testsData={sortedData} />
        <hr />
        <pre>{JSON.stringify(sortedData, null, 2)}</pre>
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
