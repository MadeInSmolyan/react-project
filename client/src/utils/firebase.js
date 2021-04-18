import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDC3bjyIjgdbpJo9D2HkvRgL3ZO0eVf-v0",
  authDomain: "react-dealership.firebaseapp.com",
  projectId: "react-dealership",
  storageBucket: "react-dealership.appspot.com",
  messagingSenderId: "1065252254740",
  appId: "1:1065252254740:web:ad2ead57c63f41c791a301"
};

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser){
          
          console.log('Logged In');
          console.log(authUser);
        } else {
          
          console.log('Logged Out');
        }  
      });
    

  export default firebase;

  export const auth = firebase.auth();