import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBnCriB0gT8dd7qRgqpQnf166dLKBMmGlI",
    authDomain: "wattfakeapp.firebaseapp.com",
    projectId: "wattfakeapp",
    storageBucket: "wattfakeapp.appspot.com",
    messagingSenderId: "766476705698",
    appId: "1:766476705698:web:3c24e4808c40eb8e2e1cfb",
    measurementId: "G-54HQH9276L"
}

export default firebase.initializeApp(firebaseConfig);