import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Chart from '../components/chart';

class WeatherList extends Component {


  render() {
    const url = this.props.location.pathname.slice(1);
    let cityData1 = this.props.weather.filter(el => el.city.name === url);
    let cityData = cityData1[0];
    const temps = cityData && cityData.list.map(weather => weather.main.temp);
    const pressures = cityData && cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData && cityData.list.map(weather => weather.main.humidity);
    return (
      <div>
        <p>Weekly Forecast</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr key={cityData.city.name}>
              <td>{cityData.city.name}</td>
              <td><Chart data={temps.slice(0, 7)} color="red" units="C" /></td>
              <td><Chart data={pressures.slice(0, 7)} color="green" units="hPa" /></td>
              <td><Chart data={humidities.slice(0, 7)} color="blue" units="%" /></td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li> Current temperature -  {cityData.list[0].main.temp} C</li>
          <li>Feels like {cityData.list[0].main.feels_like} C</li>
          <li>Current humidity - {cityData.list[0].main.humidity} %</li>
          <li>Current pressure - {cityData.list[0].main.pressure} hPa</li>
        </ul>

        <Link to='/weather'><button className="btn btn-secondary">Back</button></Link>
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
export default connect(mapStateToProps)(WeatherList);
