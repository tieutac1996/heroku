import React, { Component } from "react";
import { connect } from "react-redux";

class Filter extends Component {
  getColor(statusName) {
    if(statusName === this.props.filter){
      return {backgroundColor:'yellow'};
    }
  }
  setColor(filterName){
    this.props.dispatch({type : filterName});
  }
  render() {
    return (
      <div id="button-bottom">
        <button onClick={() => {this.setColor("FILTER_SHOW_ALL")}} style={this.getColor("SHOW_ALL")}>SHOW ALL</button>
        <button onClick={() => {this.setColor("FILTER_MEMORIZED")}} style={this.getColor("MEMORIZED")}>MEMORIZED</button>
        <button onClick={() => {this.setColor("FILTER_NEED_PRACTICE")}} style={this.getColor("NEED_PRACTICE")}>NEED PRACTICE</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { filter: state.filterStatus };
}

export default connect(mapStateToProps)(Filter);
