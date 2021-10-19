import { types } from "../types/types";

export const saveReservation = (obj) => ({
	type: types.saveReservation,
	payload: obj

});

export const saveHour = (hour) => ({
	type: types.saveHour,
	payload: hour
});