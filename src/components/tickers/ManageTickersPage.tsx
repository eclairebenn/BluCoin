/* eslint-disable import/no-unresolved */
import React from "react";
import { connect } from "react-redux";
import * as tickerActions from "../../redux/actions/tickerActions";
import { bindActionCreators } from "redux";

interface Props {
  actions: { createTicker: Function };
}
interface State {
  ticker: {
    name: string;
    ticker: string;
  };
}

class ManageTickersPage extends React.Component<Props, State> {
  handleChange = (e) => {
    const ticker = { ...this.state.ticker, name: e.target.value };
    this.setState({ ticker });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.createTicker(this.state.ticker);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add Ticker</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.ticker.name}
        />
        <input type="submit" value="Save" />
      </form>
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
    actions: bindActionCreators(tickerActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTickersPage);
