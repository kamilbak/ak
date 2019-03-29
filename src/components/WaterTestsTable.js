import React from "react";

import _ from "lodash";


import { Table, Input, Icon } from "semantic-ui-react";

import WaterTestsRow from "./WaterTestsRow";

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

  handleDeleteClick() {
    console.log("click", this);
  }

  render() {
    const { column, data, direction } = this.state;
    console.log(">", this.props);

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

            {data &&
              data.map(testData => <WaterTestsRow testData={testData} />)}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default WaterTestsTable;
