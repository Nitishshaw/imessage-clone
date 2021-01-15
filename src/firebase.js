import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1uqQ7ATn5yj3pb8kpJlMLix_O2zKzGwM",
    authDomain: "imessage-clone-eac5e.firebaseapp.com",
    projectId: "imessage-clone-eac5e",
    storageBucket: "imessage-clone-eac5e.appspot.com",
    messagingSenderId: "1039768156134",
    appId: "1:1039768156134:web:a7c9e299df6e2418528827",
    measurementId: "G-VE7ERGGSRF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth, provider};
  export default db;