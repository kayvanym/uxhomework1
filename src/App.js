import React, { Component } from "react";
import YearFilter from "./mycomponents/YearFilter";

import logo from "./logo.svg";
import "./App.css";
import Table from "./mycomponents/Table";

class App extends Component {
  state = {
    Co2Emission: [],
    filteredCo2Emission: []
  };

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      Co2Emission: data,
      filteredCo2Emission: data
    });

    console.log("data fetched");
  }

  handleYearFilter = (yearFrom, yearTo) => {
    if (yearFrom.length === 0 && yearTo.length === 0) {
      alert("From Year and To Year parameters are empty.");
      return;
    }

    if (yearFrom.length === 0) {
      yearFrom = "1800";
    }
    if (yearTo.length === 0) {
      yearTo = "2019";
    }
    if (isNaN(yearFrom) || isNaN(yearTo)) {
      alert("please enter a valid year.");
      return;
    }
    if (parseInt(yearFrom) < 1800 || parseInt(yearTo) > 2019) {
      alert("Please enter a valid year between 1800 and 2019.");
      return;
    }
    if (parseInt(yearFrom) > parseInt(yearTo)) {
      alert("Year from must be earlier than Year to.");
      return;
    }
    this.filterCO2EmissionByYear(yearFrom, yearTo);
  };

  filterCO2EmissionByYear(yearFrom, yearTo) {
    let filtered = this.state.Co2Emission;

    //YearFrom and YearTo
    filtered = filtered.filter(co2 => co2.Year >= yearFrom);
    filtered = filtered.filter(co2 => co2.Year <= yearTo);

    this.setState({
      filteredCo2Emission: filtered,
      yearFrom: yearFrom,
      yearTo: yearTo
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Global CO2 Emission</h1>
        <YearFilter onYearFilter={this.handleYearFilter} />
        <Table Co2Emission={this.state.filteredCo2Emission} />
      </div>
    );
  }
}

export default App;
