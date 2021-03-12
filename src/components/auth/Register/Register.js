import React, { useState } from 'react';
import { Button, Form, Input, Icon } from 'semantic-ui-react';
import firebase from '../../../utils/firebase';
import "firebase/auth";
import { toast } from 'react-toastify';
const Register = () => {

    const [registerForm, setRegisterForm] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    //detructuring
    const { userName, email, password, confirmPassword } = registerForm;
    const onChange = e => {
        setRegisterForm({
            ...registerForm,
            [e.target.name]: e.target.value
        })
    }

    const handlerPassword = () => {
        setShowPassword(!showPassword);
    }

    const onSubmit = e => {
        if (userName.trim() === ''
            || email.trim() === ''
            || password.trim() === ''
            || confirmPassword.trim() === '') {
            setError(true)
            return
        }
        setError(false);
        setLoading(true);
        firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
            toast.success("Cuentra registrada correctamente")
            changeUserName()
        }).catch(err => {
            toast.error("Ha ocurrido un error");
        }).finally(() => {
            setLoading(false);
        })


    }

    const changeUserName = () => {
        firebase.auth().currentUser.updateProfile({
            displayName: userName
        }).catch(() => {
            console.log("Ha ocurrido un error")
        })
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Field>
                <label>Nombre de usuario</label>
                <Input
                    placeholder="Ingrese nombre de usuario"
                    type="text"
                    size="huge"
                    name="userName"
                    onChange={onChange} />
            </Form.Field>
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
                    type={showPassword ? "text" : "password"}
                    size="huge"
                    name="password"
                    onChange={onChange}
                    icon={showPassword ? (
                        <Icon name="eye slash outline" link onClick={handlerPassword} />
                    ) : (
                        <Icon name="eye" link onClick={handlerPassword} />
                    )}
                />
            </Form.Field>
            <Form.Field>
                <label>Cofirmar contraseña</label>
                <Input
                    placeholder="Contraseña"
                    type={showPassword ? "text" : "password"}
                    size="huge"
                    name="confirmPassword"
                    onChange={onChange}
                    icon={showPassword ? (
                        <Icon name="eye slash outline" link onClick={handlerPassword} />
                    ) : (
                        <Icon name="eye" link onClick={handlerPassword} />
                    )}

                />
            </Form.Field>
            <Button
                type="submit"
                primary
                fluid
                size="huge"
                loading={loading}
            >Crear cuenta</Button>
        </Form>
    );
}

export default Register;