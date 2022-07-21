// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB1UbjDez_57Mqp29iYPswTZfu4IXffNuI",
	authDomain: "lat-mini-projext.firebaseapp.com",
	projectId: "lat-mini-projext",
	storageBucket: "lat-mini-projext.appspot.com",
	messagingSenderId: "498232534680",
	appId: "1:498232534680:web:e1222c60b0a850963792ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
