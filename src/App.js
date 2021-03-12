import React, { useState } from 'react';
import firebase from './utils/firebase';
import "firebase/auth";
import LoggedLayout from './layout/LoggedLayout';

//components
import Auth from './pages/Auth'

function App() {

  const [user, setUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const [loading, setLoading] = useState(false);

  firebase.auth().onAuthStateChanged(currentUser => {
    if (!currentUser) {
      firebase.auth().signOut();
      setUser(null);
    } else {
      setUser(currentUser);
    }
    setLoading(false);
  })
  if (loading) return null;


  return (
    <>
      {!user ? <Auth /> : <LoggedLayout user={user} />}
    </>
  );
}

export default App;
