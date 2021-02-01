import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDaojFDhDw1sKzJiBq0J22TTHfvsfP4SNc",
  authDomain: "netflix-f43a2.firebaseapp.com",
  projectId: "netflix-f43a2",
  storageBucket: "netflix-f43a2.appspot.com",
  messagingSenderId: "195165417589",
  appId: "1:195165417589:web:c46061908b7c7c51b6083c",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
