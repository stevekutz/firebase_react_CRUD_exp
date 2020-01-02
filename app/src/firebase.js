import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDU2EJWBWDiRcKvHKyaq1QhpU1Lg9sZMu0",
    authDomain: "fir-crud-9a0af.firebaseapp.com",
    databaseURL: "https://fir-crud-9a0af.firebaseio.com",
    projectId: "fir-crud-9a0af",
    storageBucket: "fir-crud-9a0af.appspot.com",
    messagingSenderId: "181387677971",
    appId: "1:181387677971:web:e4e2d3e62f7e783ea74ae6"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase