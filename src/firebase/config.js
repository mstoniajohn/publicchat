import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyC7DrrP16MBjD3hvU9on1qRshqYUj8FdO8',
	authDomain: 'vue-udemy-cc1b7.firebaseapp.com',
	databaseURL: 'https://vue-udemy-cc1b7-default-rtdb.firebaseio.com',
	projectId: 'vue-udemy-cc1b7',
	storageBucket: 'vue-udemy-cc1b7.appspot.com',
	messagingSenderId: '14672674618',
	appId: '1:14672674618:web:9e2c32c9cd2d4a9255da03',
};
// initilize appa
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.database();
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp, db, storage };
