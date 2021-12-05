// eslint-disable-next-line import/no-unresolved
import * as types from "../actions/actionTypes";

export default function tickerReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_TICKER:
      return [...state, { ...action.ticker }];

    case types.LOAD_TICKERS_SUCCESS:
      console.log("Hi im inside the reducer" + action.tickers);
      return action.tickers;

    default:
      return state;
  }
}
