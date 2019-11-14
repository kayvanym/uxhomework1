import React, { Component } from "react";

class YearFilter extends Component {
  state = {
    yearFrom: "",
    yearTo: ""
  };

  handleYearFrom = e => {
    this.setState({ yearFrom: e.target.value });
  };
  handleYearTo = e => {
    this.setState({ yearTo: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="ui input"
          style={{ marginTop: "20px", marginRight: "20px" }}
        >
          <input
            type="text"
            placeholder="Year From..."
            onChange={e => this.handleYearFrom(e)}
          />
        </div>
        <div
          className="ui input"
          style={{ marginTop: "20px", marginRight: "20px" }}
        >
          <input
            type="text"
            placeholder="Year To..."
            onChange={e => this.handleYearTo(e)}
          />
        </div>
        <button
          className="ui primary button"
          onClick={() =>
            this.props.onYearFilter(this.state.yearFrom, this.state.yearTo)
          }
        >
          {" "}
          Filter{" "}
        </button>
      </React.Fragment>
    );
  }
}

export default YearFilter;
