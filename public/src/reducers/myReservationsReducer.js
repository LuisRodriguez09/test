import { types } from "../types/types";

const initialState = {
	objReservation: {}
};

export const myReservationReducer = (state = initialState, action) => {

	switch (action.type) {
		case types.saveReservation:
			return {
				...state,
				objReservation: { ...action.payload }
			};
		case types.saveHour:
			return {
				...state,
				hour: state.payload
			};
		default:
			return state;
	}

};
