import React, { Component } from "react";

export default class Table extends Component {
  render() {
    //let { allPers } = this.props;
    let Co2Emission = this.props.Co2Emission;
    if (Co2Emission.length === 0) return <p>There is no data.</p>;
    return (
      <table className="ui single line table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Date</th>
            <th>Gas Fuel</th>
            <th>Liquid Fuel</th>
            <th>Solid Fuel</th>
            <th>Cement</th>
            <th>Gas Flaring</th>
            <th>Per Capita</th>
          </tr>
        </thead>
        <tbody>
          {Co2Emission.map(co2 => (
            <tr key={co2.Year}>
              <td>{co2.Year}</td>
              <td>{co2.Total}</td>
              <td>{co2["Gas Fuel"]}</td>
              <td>{co2["Liquid Fuel"]}</td>
              <td>{co2["Solid Fuel"]}</td>
              <td>{co2["Cement"]}</td>
              <td>{co2["Gas Flaring"]}</td>
              <td>{co2["Per Capita"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

//export default Table;
