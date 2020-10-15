import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAPIResponse } from '../action-creators/FetchData';

class InputText extends React.Component {

  state = {
    value: null
  }

  _changeHandler = e => {
    this.setState({
      value: e.target.value
    });
  }

  _fetch = (event) => {
    event.preventDefault();
    const { value } = this.state;
    if (!value) {
      alert('Please fill the input.');
      return;
    }
    this.props.FetchAPIResponse(value);
  }

  render() {
    return (
      <form className="input-group" onSubmit={this._fetch} >
        <input className="form-control" placeholder="Enter a city..." onChange={this._changeHandler} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary" >Submit</button>
        </span>
      </form>
    )
  }
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ FetchAPIResponse: fetchAPIResponse }, dispatch);
}

export default connect(null, matchDispatchToProps)(InputText);
