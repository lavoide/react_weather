import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style.css';
import { bindActionCreators } from 'redux';
import { deleteWeather } from '../action-creators/FetchData';
import EditButtons from './editButtons';
import {
    Link,
    withRouter
} from "react-router-dom";

class CurrentList extends Component {


    render() {
        return (
            <div className="weather-container" >
                {this.props.conditions.map((cityData, id) =>
                    <div className="weather" key={cityData.name}>
                        <Link
                            key={id}
                            to={`/${cityData.name}`}
                        >
                            <h3>{cityData.name}</h3>
                            <p>{cityData.main.temp}</p>
                            <p>{cityData.weather[0].main}</p>
                            <p><img src={`http://openweathermap.org/img/w/${cityData.weather[0].icon}`} alt="Missing icon"></img></p>
                        </Link>


                        <EditButtons city={cityData.name} />
                    </div>)}

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        weather: state.fetchConfig.weather,
        city: state.fetchConfig.name,
        conditions: state.fetchConfig.conditions
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ deleteWeather }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurrentList));
