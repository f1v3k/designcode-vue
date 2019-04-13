import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB65OaSdm5Fv9GifnRigV3AZWKICGLYdHo",
  authDomain: "vue-hq-91eb2.firebaseapp.com",
  databaseURL: "https://vue-hq-91eb2.firebaseio.com",
  projectId: "vue-hq-91eb2",
  storageBucket: "vue-hq-91eb2.appspot.com",
  messagingSenderId: "735635893257"
});

export const db = firebaseApp.firestore();