/* eslint-disable import/no-unresolved */
import * as types from "./actionTypes";
import * as tickerApi from "../../api/tickerApi";

export function createTicker(ticker) {
  return { type: types.CREATE_TICKER, ticker };
}

export function loadTickersSuccess(tickers) {
  console.log("inside loadtickers success tickers: " + tickers);
  return { type: types.LOAD_TICKERS_SUCCESS, tickers };
}

//Thunk
export function loadTickers() {
  return function (dispatch) {
    return tickerApi
      .getTickers()
      .then((tickers) => {
        console.log(
          "Hello inside the action the ticker result is " +
            JSON.stringify(tickers)
        );
        dispatch(loadTickersSuccess(tickers));
      })
      .catch((error) => {
        //Dispatch failed action
        throw error;
      });
  };
}
