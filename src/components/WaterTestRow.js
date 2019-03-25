import React from "react";

const WaterTestRow = data => {
  return (
    <tr>
      <th scope="row">{data.testData.testDate}</th>
      <td>{data.testData.testNo3}</td>
      <td>{data.testData.testPo4}</td>
      <td>{data.testData.testK}</td>
      <td>{data.testData.testMg}</td>
      <td>{data.testData.testCa}</td>
      <td>{data.testData.testFe}</td>
      <td>{data.testData.testKh}</td>
      <td>{data.testData.testGh}</td>
      <td>{data.testData.ratioNPK}</td>
      <td>{data.testData.ratioCaMgK}</td>
    </tr>
  );
};

export default WaterTestRow;
