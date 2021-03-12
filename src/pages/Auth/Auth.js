import React, { Fragment, useState } from 'react';
import { Grid, Image, Container, Button } from 'semantic-ui-react';
import AuthOptions from '../../components/auth/authOptions/AuthOptions';
import Login from '../../components/auth/login/Login';
import LoginImage from '../../asstes/5836.jpg';
import Register from '../../components/auth/Register/Register';
const Auth = () => {

    const [selectedForm, setSelectedForm] = useState(null);

    const handleForm = () => {
        switch (selectedForm) {
            case "login":
                return <Login />
            case "register":
                return <Register />
            default:
                return <Login />

        }
    }

    return (
        <Grid columns={3} divided >
            <Grid.Row >
                <Grid.Column width={8} mobile={16} tablet={8} computer={8} >
                    <Image src={LoginImage} />
                </Grid.Column>
                <Grid.Column width={8} computer={8} >
                    <div style={{ marginTop: '150px', marginRight: '10rem', marginLeft: '10rem' }}>
                        <Button.Group>
                            <Button
                                onClick={() => setSelectedForm('login')}
                            >Iniciar Sesion</Button>
                            <Button.Or text=" "></Button.Or>
                            <Button
                                primary
                                onClick={() => setSelectedForm('register')}
                            >Registrarse</Button>
                        </Button.Group>
                        {handleForm()}
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid >
    );
}

export default Auth;