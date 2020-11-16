import firebase from 'firebase';
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAMm9JoX80b8kvOO4NnN3mWB01aQzJHzGo",
    authDomain: "my-project-b99fb.firebaseapp.com",
    databaseURL: "https://my-project-b99fb.firebaseio.com",
    projectId: "my-project-b99fb",
    storageBucket: "my-project-b99fb.appspot.com",
    messagingSenderId: "787556795495",
    appId: "1:787556795495:web:a64d324063719b12b000c2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()