
let initialState = {
    weather: [],
    conditions: [],
    name: []
};

const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_WEATHER_DATA':
            action.payload.list[0].name = action.payload.city.name;
            const id = state.name.indexOf(action.payload.city.name);
            if (state.name.includes(action.payload.city.name)) {
                state.weather.splice(id, 1);
                state.conditions.splice(id, 1);
                state.name.splice(id, 1);
                return {
                    ...state,
                    weather: [...state.weather, action.payload],
                    name: [...state.name, action.payload.city.name],
                    conditions: [...state.conditions, action.payload.list[0]]
                }
            }
            else return {
                ...state,
                weather: [...state.weather, action.payload],
                name: [...state.name, action.payload.city.name],
                conditions: [...state.conditions, action.payload.list[0],]
            };

        case 'DELETE_WEATHER_DATA':
            const id2 = state.name.indexOf(action.payload);
            state.weather.splice(id2, 1);
            state.conditions.splice(id2, 1);
            state.name.splice(id2, 1);
            return {...state, weather:[...state.weather], conditions:[...state.conditions], name: [...state.name]}
        default:
            return state;
    }
}

export default fetchReducer;