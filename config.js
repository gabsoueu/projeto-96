import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyDuWx1BhaajtAei-Tel3BQoKgpb9TwlGUg",
    authDomain: "twitter2-bd144.firebaseapp.com",
    databaseURL: "https://twitter2-bd144-default-rtdb.firebaseio.com",
    projectId: "twitter2-bd144",
    storageBucket: "twitter2-bd144.appspot.com",
    messagingSenderId: "853051370942",
    appId: "1:853051370942:web:b5616478ffc936c6c15def"
  };

if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
    }
export default firebase.database()