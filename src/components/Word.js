import React, { Component } from "react";
import { connect } from "react-redux";
class Word extends Component {
  memorizedWord() {
    this.props.dispatch({
      type: "TOGGLE_MEMORIZED",
      id: this.props.myWord.id,
    });
  }
  showWord() {
    this.props.dispatch({
      type: "TOGGLE_SHOW",
      id: this.props.myWord.id,
    });
  }

  render() {
    const { en, vn, memorized , isShow} = this.props.myWord;
    const textDecoration = memorized ? "line-through" : "none";
    const showText = isShow ? vn : '------';
    return (
      <div>
        <div className="word-main">
          <div className="word-top">
            <div className="list-items">
              <button onClick={this.memorizedWord.bind(this)}>
                <i className="fab fa-accusoft"></i>
              </button>
              <button onClick={this.showWord.bind(this)}>
                <i className="fas fa-adjust"></i>
              </button>
            </div>
            <div>
              <h3 style={{ textDecoration }}>{en}</h3>
              <h3>{showText}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Word);
