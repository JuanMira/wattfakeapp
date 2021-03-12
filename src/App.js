import React, { useState } from 'react';
import firebase from './utils/firebase';
import "firebase/auth";
import LoggedLayout from './layout/LoggedLayout';
import { ToastContainer } from 'react-toastify';

//components
import Auth from './pages/Auth'

function App() {

  const [user, setUser] = useState(false);
  const [reloadApp, setReloadApp] = useState(false);
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
      {!user ? <Auth /> : <LoggedLayout user={user} setReloadApp={setReloadApp} />}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover={false}
      />
    </>
  );
}

export default App;
