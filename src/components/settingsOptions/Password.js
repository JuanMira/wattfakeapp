import React, { useState } from 'react';
import { Button, Form, Grid, Icon, Input } from 'semantic-ui-react';
import firebase from '../../utils/firebase';
import "firebase/auth";
import { reauthentication } from '../../utils/api';
import { toast } from 'react-toastify';
const Password = ({ setShow, setTitle, setContentModal }) => {

    const onEdit = () => {
        setTitle("Actualizar contraseña");
        setContentModal(<PasswordChange setShow={setShow} />);
        setShow(true);
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={10}>
                    <h2>Contraseña : **** **** **** </h2>
                </Grid.Column>
                <Grid.Column>
                    <Icon
                        name="pencil"
                        circular
                        size="large"
                        link
                        onClick={onEdit}
                    />
                </Grid.Column>
            </Grid.Row>

        </Grid >
    );
}

const PasswordChange = ({ setShow }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        repeatNewPassword: ''
    })

    const onSubmit = () => {
        if (!formData.currentPassword || !formData.newPassword || !formData.repeatNewPassword) {
            toast.warning("La contraseña no puede ser vacia")
        } else if (formData.currentPassword === formData.newPassword) {
            toast.warning("La contraaseña no puede ser igual a la actual")
        } else if (formData.newPassword !== formData.repeatNewPassword) {
            toast.warning("las contraseña deben coincidir")
        } else if (formData.newPassword < 6) {
            toast.warning("La contraseña debe tener mas de 6 digitos")
        } else {
            reauthentication(formData.currentPassword).then(() => {
                const currentUser = firebase.auth().currentUser;
                currentUser.updatePassword(formData.newPassword).then(() => {
                    toast.success("Contraseña cambiada correctamente");
                    setShow(false)
                    firebase.auth().signOut();
                })
            }).catch(err => {
                toast.warning("Ha ocurrido un error")
            })
        }
    }

    const passwordHandler = () => {
        setShowPassword(!showPassword);
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Input>
                <Input
                    placeholder="Contraseña actual"
                    type={showPassword ? "text" : "password"}
                    onChange={e => setFormData({ ...formData, currentPassword: e.target.value })}
                    icon={<Icon
                        name={showPassword ? "eye slash outline" : "eye"}
                        link
                        onClick={passwordHandler}
                    />}
                />
            </Form.Input>
            <Form.Field>
                <Input
                    placeholder="Nueva contraseña"
                    type={showPassword ? "text" : "password"}
                    onChange={e => setFormData({ ...formData, newPassword: e.target.value })}
                    icon={<Icon
                        name={showPassword ? "eye slash outline" : "eye"}
                        link
                        onClick={passwordHandler}
                    />}
                />
            </Form.Field>
            <Form.Field>
                <Input
                    placeholder="Repetir"
                    type={showPassword ? "text" : "password"}
                    onChange={e => setFormData({ ...formData, repeatNewPassword: e.target.value })}
                    icon={<Icon
                        name={showPassword ? "eye slash outline" : "eye"}
                        link
                        onClick={passwordHandler}
                    />}
                />
            </Form.Field>
            <Button type="submit">
                Actualizar
            </Button>
        </Form>
    )

}

export default Password;