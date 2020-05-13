import React, { Component } from "react";
import { connect } from "react-redux";
class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      en: "",
      vn: "",
    };
  }
  onChange(e) {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  }
  addWord() {
    this.props.dispatch({
      type: "ADD_WORD",
      en: this.state.en,
      vn: this.state.vn,
    });
    this.props.dispatch({
        type: "SHOW_ADD_WORD",
      })
  }
  render() {
    return (
      <div id="add-input">
        <input placeholder="Enter your en" onChange={this.onChange.bind(this)} name="en" value={this.state.en} />
        <input placeholder="Enter your vn" onChange={this.onChange.bind(this)} name="vn" value={this.state.vn} />
        <button onClick={this.addWord.bind(this)} value="Add">
          Add
        </button>
      </div>
    );
  }
}

export default connect()(Add);
