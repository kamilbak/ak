import React from "react";

import { Table } from "reactstrap";

import WaterTestRow from "./WaterTestRow";

class WaterTestsTable extends React.Component {
  render() {
    return (
      <div>
        <Table size="sm" striped bordered>
          <thead>
            <tr>
              <th>Date</th>
              <th>N</th>
              <th>P</th>
              <th>K</th>
              <th>Mg</th>
              <th>Ca</th>
              <th>Fe</th>
              <th>Kh</th>
              <th>Gh</th>
              <th>NPK Ratio</th>
              <th>CaMgK Ratio</th>
            </tr>
          </thead>
          <tbody>
            {this.props.testsData &&
              this.props.testsData.map(testData => (
                <WaterTestRow key={testData.id} testData={testData} />
              ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default WaterTestsTable;
