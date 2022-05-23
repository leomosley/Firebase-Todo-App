import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyArJp2j8ZFnhxFlcJZe64-MUFv5r7Doj4Y", 
    authDomain: "fir-database-test-cd9c6.firebaseapp.com", 
    databaseURL: "https://fir-database-test-cd9c6-default-rtdb.europe-west1.firebasedatabase.app", 
    projectId: "fir-database-test-cd9c6", 
    storageBucket: "fir-database-test-cd9c6.appspot.com", 
    messagingSenderId: "511906436714", 
    appId: "1:511906436714:web:2f35f0b0c1a4f858239c13", 
    measurementId: "G-036"
};

firebase.initializeApp(firebaseConfig);

export default firebase;