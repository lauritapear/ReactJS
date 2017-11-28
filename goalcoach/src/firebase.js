import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyBaMFTvUuldh8H-A7fAwDUnlIi7UePaL80",
   authDomain: "goalcoach-463a2.firebaseapp.com",
   databaseURL: "https://goalcoach-463a2.firebaseio.com",
   projectId: "goalcoach-463a2",
   storageBucket: "goalcoach-463a2.appspot.com",
   messagingSenderId: "954247643629"
 };

 export const firebaseApp = firebase.initializeApp(config);
 export const goalRef = firebase.database().ref('goals');
