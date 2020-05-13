import React, { Component } from "react";
import { connect } from "react-redux";
import Word from "./Word";
import Filter from "./Filter";
import Header from "./Header";
import Add from "./Add";
class Main extends Component {
  getWordList() {
    const { arrWords, filterStatus } = this.props;
    if (filterStatus === "MEMORIZED")
      return arrWords.filter((e) => e.memorized);
    if (filterStatus === "NEED_PRACTICE")
      return arrWords.filter((e) => !e.memorized);
    return arrWords;
  }
  render() {
    return (
      <div>
        <Header />
        {this.props.isAdding ? <Add /> : ''}
        <div>
          {this.getWordList().map((x) => (
            <Word myWord={x} key={x.id}></Word>
          ))}
        </div>
        <Filter />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    arrWords: state.arrWords,
    filterStatus: state.filterStatus,
    isAdding : state.isAdding
  };
}

export default connect(mapStateToProps)(Main);
