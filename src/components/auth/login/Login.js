import React, { useState } from 'react';
import { Segment, Form, Button, Input } from 'semantic-ui-react';
import firebase from '../../../utils/firebase';
import "firebase/auth";
import "./index.css";
import { toast } from 'react-toastify';
const Login = () => {

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    //destructuring
    const { email, password } = loginForm;

    const onChange = e => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        if (email.trim() === '' || password.trim() === '') {
            setError(true);
            return
        }
        setLoading(true)
        firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
            toast.success("Usuario logueado correctamente")
        }).catch(err => {
            toast.error("Ha ocurrido un error vuelve a intentar")
        }).finally(() => {
            setLoading(false)
        })

    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Field>
                <label>Correo electronico</label>
                <Input
                    placeholder="Ingrese correo"
                    type="email"
                    size="huge"
                    name="email"
                    onChange={onChange}
                />
            </Form.Field>
            <Form.Field>
                <label>Contraseña</label>
                <Input
                    placeholder="Contraseña"
                    type="password"
                    size="huge"
                    name="password"
                    onChange={onChange}
                />
            </Form.Field>
            <Button
                type="submit"
                primary
                fluid
                size="huge"
                loading={loading}
            >Inisiar sesión</Button>
        </Form>

    );
}

export default Login;