import React, { useState } from 'react';
import { Grid, Image, Button } from 'semantic-ui-react';
import Login from '../../components/auth/login/Login';
import LoginImage from '../../asstes/5836.jpg';
import Register from '../../components/auth/Register/Register';
import "./Auth.scss";
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
        <Grid divided >
            <Grid.Row >
                <Grid.Column width={7}  >
                    <Image src={LoginImage} />
                </Grid.Column>
                <Grid.Column width={4} computer={8} >
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