import React from 'react';
import firebase from '../utils/firebase';
import { Container, Grid } from 'semantic-ui-react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import "firebase/auth";
import Routes from '../routes/Routes';

const LoggedLayout = ({ user, setReloadApp }) => {

    return (
        <Router>

            <NavBar user={user} />

            <Container>
                <Routes user={user} setReloadApp={setReloadApp} />
            </Container>
        </Router>
    );
}

export default LoggedLayout;
//<button onClick={sessionHandler}>Cerrar sesion</button>