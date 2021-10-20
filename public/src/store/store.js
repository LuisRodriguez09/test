
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { availableReducer } from '../reducers/availableReducer';
import { myReservationReducer } from '../reducers/myReservationsReducer';
import { reservationReducer } from '../reducers/reservationReducer';
import { showTripReducer } from '../reducers/showTripReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
	reservation: reservationReducer,
	available: availableReducer,
	myReservation: myReservationReducer,
	show: showTripReducer
});

export const store = createStore(
	reducers,
	composeEnhancers(
		applyMiddleware(thunk)
	)
);

