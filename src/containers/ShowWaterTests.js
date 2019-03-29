import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import WaterTestsTable from '../components/WaterTestsTable';
import AreaChartExtended from '../components/AreaChartExtended';

import { mockedTestsData } from '../utils/dataMocks';

import { deleteWaterTest } from '../store/actions/waterTests';

import {
  Container,
  Divider,
  Header,
  Message,
  Segment,
  Icon,
  Table,
} from 'semantic-ui-react';

class ShowWaterTests extends Component {
  render() {

    let data;
    if(this.props.testsData) {
      console.log('-----', this.props.testsData);
    }

    // let sortedDataOldNew = [];
    // let sortedDataNewOld = [];
    // if (this.props.testsData) {
    //   sortedDataOldNew = this.props.testsData.sort(function(b, a) {
    //     a = a.testDate.split('/');
    //     b = b.testDate.split('/');
    //     return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
    //   });
    //   sortedDataNewOld = this.props.testsData.sort(function(a, b) {
    //     a = a.testDate.split('/');
    //     b = b.testDate.split('/');
    //     return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
    //   });
    // }

    // console.log(this.props.testsData);
    // this.props.dispatch(deleteWaterTest(this.props.testsData[0].id));

    return (
      <div>
        {this.props.testsData &&
          <WaterTestsTable testsData={this.props.testsData} />

        }
        <Header as="h5">
          <Icon.Group size="large">
            <Icon color="green" name="plus circle" />
          </Icon.Group>
          Add new test
        </Header>
        <hr />
        <Segment>
          <AreaChartExtended
            data={this.props.testsData}
            title="No3 chart"
            testName="testNo3"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <AreaChartExtended
            data={this.props.testsData}
            title="Po4 chart"
            testName="testPo4"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <AreaChartExtended
            data={this.props.testsData}
            title="K chart"
            testName="testK"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </Segment>
        <hr />
        <Container>
          <Message>
            <Message.Header>Data:</Message.Header>
            <pre>{JSON.stringify(this.props.testsData, null, 2)}</pre>
          </Message>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    testsData: state.firestore.ordered.tests,
    // testsData: mockedTestsData,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'tests' }])
)(ShowWaterTests);
