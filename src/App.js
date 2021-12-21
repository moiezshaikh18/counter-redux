import "./App.css";
import React from "react";
import { connect } from "react-redux";
import { incrementVal, inputValue, decrementVal } from "./action";
import Counter from "./Counter";

class App extends React.Component {
  handleOnChange = (e) => {
    let textVal = +e.target.value;
    console.log(textVal);
    this.props.setText(textVal);
  };

  incrementOnClick = () => {
    let num = this.props.textVal;
    this.props.inc(num);
  };

  decrementOnClick = () => {
    let num2 = this.props.textVal;
    this.props.dec(num2);
  };

  render() {
    return (
      <div>
        <Counter
          onChange={this.handleOnChange}
          textVal={this.props.textVal}
          onClick={this.incrementOnClick}
          count={this.props.count}
          onDec={this.decrementOnClick}
        ></Counter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  textVal: state.mainReducer.textVal,
  count: state.mainReducer.count,
});

const mapDispatchToProps = (dispatch) => ({
  setText: (val) => {
    dispatch(inputValue(val));
  },
  inc: (num) => {
    dispatch(incrementVal(num));
  },

  dec: (num2) => {
    dispatch(decrementVal(num2));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
