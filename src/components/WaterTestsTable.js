import React from "react";

import _ from "lodash";

import { Table, Input } from "semantic-ui-react";

class WaterTestsTable extends React.Component {
  state = {
    column: null,
    data: this.props.testsData,
    direction: null,
  };

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: "ascending",
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending",
    });
  };

  render() {
    const { column, data, direction } = this.state;

    return (
      <div>
        <Table celled selectable sortable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === "date" ? direction : null}
                onClick={this.handleSort("date")}
              >
                Date
              </Table.HeaderCell>
              <Table.HeaderCell>No3</Table.HeaderCell>
              <Table.HeaderCell>Po4</Table.HeaderCell>
              <Table.HeaderCell>K</Table.HeaderCell>
              <Table.HeaderCell>Mg</Table.HeaderCell>
              <Table.HeaderCell>Ca</Table.HeaderCell>
              <Table.HeaderCell>Fe</Table.HeaderCell>
              <Table.HeaderCell>Kh</Table.HeaderCell>
              <Table.HeaderCell>Gh</Table.HeaderCell>
              <Table.HeaderCell>NPK Ratio</Table.HeaderCell>
              <Table.HeaderCell>CaMgK Ratio</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.map(testData => (
              <Table.Row>
                <Table.Cell>{testData.testDate}</Table.Cell>
                <Table.Cell>{testData.testNo3}</Table.Cell>
                <Table.Cell>{testData.testPo4}</Table.Cell>
                <Table.Cell>{testData.testK}</Table.Cell>
                <Table.Cell>{testData.testMg}</Table.Cell>
                <Table.Cell>{testData.testCa}</Table.Cell>
                <Table.Cell>{testData.testFe}</Table.Cell>
                <Table.Cell>{testData.testKh}</Table.Cell>
                <Table.Cell>{testData.testGh}</Table.Cell>
                <Table.Cell>{testData.ratioNPK}</Table.Cell>
                <Table.Cell>{testData.ratioCaMgK}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default WaterTestsTable;
