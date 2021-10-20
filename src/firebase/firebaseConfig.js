import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAdALRQhUqMgfnmdS1Uc_Og8SuPqKaw5c0",
	authDomain: "true-home-fb525.firebaseapp.com",
	projectId: "true-home-fb525",
	storageBucket: "true-home-fb525.appspot.com",
	messagingSenderId: "619418996978",
	appId: "1:619418996978:web:224fe2e4cc93a18da4406b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
