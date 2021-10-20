import { types } from "../types/types";

export const availableSave = (available) => ({
	type: types.availableCities,
	payload: {
		available
	}
});

