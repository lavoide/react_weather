import axios from 'axios';

const API_KEY = '1330c144ec87772649f4c873a0985196';
const URL = (city) => `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_KEY}`

export const WEATHER = 'GET_WEATHER_DATA';
export const DELETE = 'DELETE_WEATHER_DATA';

const fetchData = async url => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        throw e;
    }
}

export const fetchAPIResponse = (city) => {
    return dispatch => {
        fetchData(URL(city)).then(response => {
            let target = response.list[0].weather[0];
            let icon = `${target.icon}.png`;
            target.icon = icon;
            dispatch({ type: WEATHER, payload: response });
        })
            .catch(e => { alert('Please check the input.'); console.log(`External error: ${e}`); });
    }
};

export const deleteWeather = (city) =>{
    return { type: DELETE, payload: city }
}
