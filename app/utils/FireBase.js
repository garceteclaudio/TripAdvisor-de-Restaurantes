import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAckKDP-fE2EB4JB24X0w1sjgczv3Xxbdk",
  authDomain: "tenedores-448d2.firebaseapp.com",
  databaseURL: "https://tenedores-448d2.firebaseio.com",
  projectId: "tenedores-448d2",
  storageBucket: "tenedores-448d2.appspot.com",
  messagingSenderId: "121060681075",
  appId: "1:121060681075:web:3421805cc80447afad1106"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
