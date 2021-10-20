import { types } from '../types/types';

const initialState = {
	cities: [],
};

export const reservationReducer = (state = initialState, action) => {

	switch (action.type) {
		case types.citiesGet:
			return {
				...state,
				cities: [...action.payload]
			};
		default:
			return state;
	}

};