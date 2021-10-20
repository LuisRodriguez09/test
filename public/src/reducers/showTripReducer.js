import { types } from "../types/types";

const initialState = {
	show: false
};

export const showTripReducer = (state = initialState, action) => {

	switch (action.type) {
		case types.showTrip:
			return {
				...state,
				show: action.payload
			};
		default:
			return state;
	}

};