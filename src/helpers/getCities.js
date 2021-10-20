import { db } from "../firebase/firebaseConfig";

import { collection, getDocs } from "firebase/firestore";

export const getCities = async () => {
	const citiesSnap = await getDocs(collection(db, `cities`));
	const cities = [];

	citiesSnap.forEach((snapCity) => {
		cities.push({
			id: snapCity.id,
			...snapCity.data(),
		});
	});

	return cities;
};
