import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { deleteWeather } from '../action-creators/FetchData';
import { fetchAPIResponse } from '../action-creators/FetchData';

class EditButtons extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        if (window.confirm("Do you really want to delete this?"))
            return this.props.deleteWeather(this.props.city);
    }
    refresh() {
        return this.props.fetchAPIResponse(this.props.city);
    }

    render() {
        return (
            <div className="editbuttons">
                <button className="button" onClick={this.edit}>Refresh</button>
                <button className="button" onClick={this.delete} title={"Delete"} >Delete</button>
            </div>
        )


    }
}
function mapStateToProps(state) {
    return {
        names: state.fetchConfig.name
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteWeather, fetchAPIResponse }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(EditButtons);