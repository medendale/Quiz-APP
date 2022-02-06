import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAcAc0chWhbPEfBjKGSbfv_FmaSI9lDPTY",
    authDomain: "quiz-app-8605f.firebaseapp.com",
    projectId: "quiz-app-8605f",
    storageBucket: "quiz-app-8605f.appspot.com",
    messagingSenderId: "520612356022",
    appId: "1:520612356022:web:7e1220c354fcc14aec6b17",
    measurementId: "G-1ZY3H06LJ7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

export default db;