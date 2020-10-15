import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/app';
import reducers from './reducers';
import thunk from 'redux-thunk';

const localStorageMiddleware = ({getState}) => {
    return (next) => (action) => {
        const result = next(action);
        localStorage.setItem('applicationState', JSON.stringify(
            getState()
        ));
        return result;
    };
};
const reHydrateStore = () => { 
    if (localStorage.getItem('applicationState') !== null) {
        return JSON.parse(localStorage.getItem('applicationState')) 
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
	reHydrateStore(),
	composeEnhancers(applyMiddleware(
		localStorageMiddleware,thunk
    ))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.querySelector('.container'));

