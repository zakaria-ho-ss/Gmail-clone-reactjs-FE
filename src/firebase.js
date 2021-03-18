import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCs1Ec3eK-ieq5TsKR848k3TvYkkdEWT7Q",
    authDomain: "clone-5c7b9.firebaseapp.com",
    projectId: "clone-5c7b9",
    storageBucket: "clone-5c7b9.appspot.com",
    messagingSenderId: "273130594964",
    appId: "1:273130594964:web:021fd48def782e93e38a81",
    measurementId: "G-5YW7Y128T1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {db, auth, provider };