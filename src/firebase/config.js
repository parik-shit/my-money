import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAQ77ANuTU8WFuisvrAark55dUZaThhFao",
    authDomain: "mymoney-aa006.firebaseapp.com",
    projectId: "mymoney-aa006",
    storageBucket: "mymoney-aa006.appspot.com",
    messagingSenderId: "1035192535459",
    appId: "1:1035192535459:web:52a1fb94afaa32a6a73216"
  };

  firebase.initializeApp(firebaseConfig);  
  const projectFireStore = firebase.firestore();
  const projectAuth = firebase.auth();
  export {projectFireStore};
  export {projectAuth};