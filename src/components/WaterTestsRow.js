import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteWaterTest } from "../store/actions/waterTests";

import { Table, Icon } from "semantic-ui-react";

class WaterTestsRow extends Component {
  handleDeleteClick = event => {
    console.log("delete click", this.props.testData.id);
    this.props.dispatch(deleteWaterTest(this.props.testData.id));
  };

  render() {
    let {
      testDate,
      testNo3,
      testPo4,
      testK,
      testMg,
      testCa,
      testFe,
      testKh,
      testGh,
      ratioNPK,
      ratioCaMgK,
    } = this.props.testData;
    console.log(">>", this.props.testData);

    return (
      <Table.Row>
        <Table.Cell>{testDate}</Table.Cell>
        <Table.Cell>{testNo3}</Table.Cell>
        <Table.Cell>{testPo4}</Table.Cell>
        <Table.Cell>{testK}</Table.Cell>
        <Table.Cell>{testMg}</Table.Cell>
        <Table.Cell>{testCa}</Table.Cell>
        <Table.Cell>{testFe}</Table.Cell>
        <Table.Cell>{testKh}</Table.Cell>
        <Table.Cell>{testGh}</Table.Cell>
        <Table.Cell>{ratioNPK}</Table.Cell>
        <Table.Cell>{ratioCaMgK}</Table.Cell>
        <Table.Cell>
          <Icon onClick={this.handleDeleteClick} name="delete" />
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default connect()(WaterTestsRow);
