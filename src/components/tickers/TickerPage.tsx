/* eslint-disable import/no-unresolved */
import React from "react";
import { connect } from "react-redux";
import * as tickerActions from "../../redux/actions/tickerActions";
import { bindActionCreators } from "redux";

interface TickerProps {
  tickers: [{ ticker: string; base_currency_name: string }];
  actions: { loadTickers: Function };
}

class TickerPage extends React.Component<TickerProps> {
  constructor(props: TickerProps) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.tickers) {
      this.props.actions
        .loadTickers()
        .catch((error: Error, errorInfo: React.ErrorInfo) => {
          alert("loading courses failed" + error + errorInfo);
        });
    }
  }
  render() {
    return (
      <div className="container">
        <h3>Add Ticker</h3>
        {this.props.tickers.map((ticker) => (
          <div key={ticker.ticker}>{ticker.base_currency_name}</div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tickers: state.tickers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadTickers: bindActionCreators(tickerActions.loadTickers, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TickerPage);
