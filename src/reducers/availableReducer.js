import { types } from "../types/types";

const initialState = {
	availableCities: {},
};

export const availableReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.availableCities:
			return {
				...state,
				availableCities: { ...action.payload },
			};

		default:
			return state;
	}
};
