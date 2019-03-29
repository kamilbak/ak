import * as React from "react";

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  Brush,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

class AreaChartExtended extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <div style={{ width: "100%", height: 100 }}>
          <ResponsiveContainer>
            <AreaChart
              data={this.props.data}
              syncId="testGroup"
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="testDate" />
              <YAxis />
              <Tooltip />
              <Area
                connectNulls
                type="monotone"
                dataKey={this.props.testName}
                stroke={this.props.stroke}
                fill={this.props.fill}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default AreaChartExtended;
