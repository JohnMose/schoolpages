// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import{getStorage}from "firebase/storage";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB19J2DJxveyp0DNf3D29odOIjpaEoNPIE",
  authDomain: "schoolpages-37bf1.firebaseapp.com",
  projectId: "schoolpages-37bf1",
  storageBucket: "schoolpages-37bf1.appspot.com",
  messagingSenderId: "468780200252",
  appId: "1:468780200252:web:5c426b7f7443615634ae39"
};

//initialize firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const storage=getStorage(app);


// const databaseRef = firebase.database().ref();
// export const schoolpagesRef = databaseRef.child("schoolPages");
//export default firebase;




