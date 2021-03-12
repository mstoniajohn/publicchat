import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: process.env.VUE_APP_API_KEY,
	authDomain: 'vue-udemy-cc1b7.firebaseapp.com',
	databaseURL: process.env.VUE_APP_DATABASE_URL,
	projectId: 'vue-udemy-cc1b7',
	storageBucket: 'vue-udemy-cc1b7.appspot.com',
	messagingSenderId: '14672674618',
	appId: process.env.VUE_APP_APP_ID,

	// appId: `${process.env.VUE_APP_APP_ID}`,
};
// initilize appa
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.database();
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp, db, storage };
