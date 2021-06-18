import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCW0hS3by1DcCl9kzSCRaFBDhu4mdHwcus",
  authDomain: "boksaeea.firebaseapp.com",
  databaseURL: "https://boksaeea-default-rtdb.firebaseio.com",
  projectId: "boksaeea",
  storageBucket: "boksaeea.appspot.com",
  messagingSenderId: "892096704483",
  appId: "1:892096704483:web:c33e3132336bd1de193ad6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   