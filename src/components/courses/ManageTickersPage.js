import React from "react";
import { connect } from "react-redux";
import * as tickerActions from "../../redux/actions/tickerActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class ManageTickersPage extends React.Component {
  state = {
    ticker: {
      name: "",
    },
  };

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
          label="Name"
          onChange={this.handleChange}
          value={this.state.ticker.name}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

ManageTickersPage.propTypes = {
  tickers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.tickers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tickerActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTickersPage);
