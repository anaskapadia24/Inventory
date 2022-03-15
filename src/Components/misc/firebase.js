import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
const Config = {
    apiKey: "AIzaSyASkSBh9VPSWPv7XMmSST9vWemC9RpjX78",
    authDomain: "stocks-app-8efa4.firebaseapp.com",
    databaseURL: "https://stocks-app-8efa4-default-rtdb.firebaseio.com",
    projectId: "stocks-app-8efa4",
    storageBucket: "stocks-app-8efa4.appspot.com",
    messagingSenderId: "297341407314",
    appId: "1:297341407314:web:acb567558460b47195cf8b"
  };
  
  const app = firebase.initializeApp(Config)
  export const auth = app.auth()
  export const db = app.database()