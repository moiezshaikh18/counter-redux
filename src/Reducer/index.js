import * as actions from "../constans";

const intialState = {
  textVal: "",
  count: 0,
};

export const appReducer = (state = intialState, action) => {
  switch (action.type) {
    case actions.SET_VALUE: {
      let newState = { ...state };
      newState.textVal = action.payload;
      return newState;
    }
    case actions.INC: {
      let newState = { ...state };
      newState.count += action.payload;
      return newState;
    }

    case actions.DEC: {
      let newState = { ...state };
      if (newState.count - action.payload >= 0) {
        newState.count -= action.payload;
      }
      return newState;
    }
    default:
      return state;
  }
};

export const mainReducer = (state = intialState, action) => {
  switch (action.type) {
    case actions.SET_VALUE: {
      let newState = { ...state };
      newState.textVal = action.payload;
      return newState;
    }
    case actions.INC: {
      let newState = { ...state };
      newState.count += action.payload;
      return newState;
    }

    case actions.DEC: {
      let newState = { ...state };
      if (newState.count - action.payload >= 0) {
        newState.count -= action.payload;
      }
      return newState;
    }
    default:
      return state;
  }
};
