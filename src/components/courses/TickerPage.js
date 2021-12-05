import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadTickers } from "../../redux/actions/tickerActions";
// import PropTypes from "prop-types";
// import { bindActionCreators } from "redux";

export default function TickerPage() {
  const tickers = useSelector((state) => state.tickers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTickers());
    console.log("Hi im inside use effect" + tickers);
  }, []);

  return (
    <>
      <h2>Ticker {tickers[0].name}</h2>
      {/* <h3>{tickers.results[0].name}</h3> */}
      {/* {tickers.map((ticker) => (
        <div key={ticker.ticker}>{ticker.name}</div>
      ))} */}
    </>
  );
}

// TickerPage.propTypes = {
//   tickers: PropTypes.any,
//   actions: PropTypes.object.isRequired,
// };

// function mapStateToProps(state) {
//   return {
//     tickers: state.tickers,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(loadTickers, dispatch),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TickerPage);
