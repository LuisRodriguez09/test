import { types } from "../types/types";

const initialState = {
	show: false,
	showBooking: false,
};

export const showTripReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.showTrip:
			return {
				...state,
				show: action.payload,
			};
		case types.showForm:
			return {
				...state,
				showForm: action.payload,
			};
		case types.showBooking:
			return {
				...state,
				showBooking: action.payload,
			};
		default:
			return state;
	}
};
