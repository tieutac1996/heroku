import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  showAddWord() {
      this.props.dispatch({
        type: "SHOW_ADD_WORD",
      })
  }
  render() {
    return (
      <div id="header-input">
        <h2>Add Word</h2>
        <button onClick={this.showAddWord.bind(this)}><span>+</span></button>
      </div>
    );
  }
}

export default connect()(Header);
