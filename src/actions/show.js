import { types } from "../types/types";

export const setShowTrip = (show) => ({
	type: types.showTrip,
	payload: show,
});

export const setShowForm = (showForm) => ({
	type: types.showForm,
	payload: showForm,
});

export const setShowBooking = (showBooking) => ({
	type: types.showBooking,
	payload: showBooking,
});
