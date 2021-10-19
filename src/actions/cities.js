import { getCities } from "../helpers/getCities";
import { types } from "../types/types";

export const startGetCities = () => {
	return async (dispatch) => {
		const cities = await getCities();
		dispatch(getCitiesSave(cities));
	};
};

export const getCitiesSave = (cities) => ({
	type: types.citiesGet,
	payload: cities

});

