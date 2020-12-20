import firebase from "firebase/app";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBuZvnVQtgg9kVJusCNyiMsc6vN--Sy9ko",
  authDomain: "task-b8448.firebaseapp.com",
  databaseURL: "https://task-b8448-default-rtdb.firebaseio.com",
  projectId: "task-b8448",
  storageBucket: "task-b8448.appspot.com",
  messagingSenderId: "697823231738",
  appId: "1:697823231738:web:139a393edfa6920578d343"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase;