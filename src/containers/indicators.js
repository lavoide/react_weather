import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Indicators extends React.Component {

  static propTypes = {
    conditions: PropTypes.shape({
      id: PropTypes.number,
      main: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string
    }).isRequired
  }

  static defaultProps = {
    conditions: {
      id: 1,
      main: '...',
      description: '...',
      icon: '...'
    }
  }

  state = {
    indicators: null
  }

  componentDidUpdate(prevProps) {
    const { conditions } = this.props;

    if (conditions !== prevProps.conditions) {
      this.setState({
        indicators: conditions
      });
    }
  }

  render() {
    const { indicators } = this.state;

    return (
      <div className="indicators-main-container">
        <div className="indicator-container">
          {indicators && indicators.description}
        </div>
        <div className="indicator-container">
          {indicators && <img src={indicators.icon} alt="weather-icon" />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    conditions: state.fetchConfig.conditions
  }
}

export default connect(mapStateToProps)(Indicators);
