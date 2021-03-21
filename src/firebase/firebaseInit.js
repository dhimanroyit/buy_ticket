import firebase from "firebase/app";
import firebaseConfig from './firebase.config';

const firebaseInit = () => {
  firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
}

export default firebaseInit;