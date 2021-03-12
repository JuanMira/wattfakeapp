import firebaseApp from './firebase';
import firebase from 'firebase/app';
import '@firebase/firestore';

const db = firebase.firestore(firebaseApp);

export const reauthentication = password => {
    const user = firebase.auth().currentUser;
    const credentials = firebase.auth.EmailAuthProvider.credential(
        user.email,
        password
    );

    return user.reauthenticateWithCredential(credentials)
}