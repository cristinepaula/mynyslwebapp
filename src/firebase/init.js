import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC72B0x8ZMcZLS8rUEOkDJp9YwRItY2kWQ",
    authDomain: "myproject-2cef5.firebaseapp.com",
    databaseURL: "https://myproject-2cef5.firebaseio.com",
    projectId: "myproject-2cef5",
    storageBucket: "myproject-2cef5.appspot.com",
    messagingSenderId: "1073575815773"
  };
  const database = firebase.initializeApp(config);
  // firebaseApp.firestore().settings({ timestampsInSnapshots: true }) //to get rid red error because of update on firebase will not affect the project.

  export default database