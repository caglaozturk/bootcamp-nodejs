// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu7VxKSFzSU3tQ2HBHXhSJjcBtmprl96M",
  authDomain: "fir-auth-7b699.firebaseapp.com",
  projectId: "fir-auth-7b699",
  storageBucket: "fir-auth-7b699.appspot.com",
  messagingSenderId: "805323676228",
  appId: "1:805323676228:web:0acaad4b1b071466107a11"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const fireStore = firebase.firestore();
const auth = firebase.auth();
const background = firebase.functions();

export { fireStore, auth };