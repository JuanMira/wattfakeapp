import React from 'react';
import firebase from '../utils/firebase';
import { Container, Grid } from 'semantic-ui-react';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import "firebase/auth";
import Routes from '../routes/Routes';

const LoggedLayout = ({ user }) => {


    console.log(user);
    return (
        <Router>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <NavBar user={user} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={14}>
                        <Container>
                            <Routes user={user} />
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Router>
    );
}

export default LoggedLayout;
//<button onClick={sessionHandler}>Cerrar sesion</button>