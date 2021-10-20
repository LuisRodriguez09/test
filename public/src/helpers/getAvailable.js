import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";



export const getAvailable = async (originCity) => {

	const citiesRef = collection(db, "cities");
	const ciudadesDisponibles = [];

	const q = query(citiesRef, where("city", "==", originCity));
	const querySnapshot = await getDocs(q);


	querySnapshot.forEach((doc) => {

		ciudadesDisponibles.push({
			id: doc.id,
			available: doc.data().available
			//...doc.data()
		});

	});

	return ciudadesDisponibles;

};
