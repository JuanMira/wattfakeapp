import React, { useState } from 'react';
import { Button, Icon, Grid, Form, Input } from 'semantic-ui-react';
import firebase from '../../utils/firebase';
import "firebase/auth";
import { toast } from 'react-toastify';
const Username = ({ user, setShow, setContentModal, setTitle, setReloadApp }) => {

    const onClick = () => {
        setTitle("Actualizar Nombre")
        setContentModal(
            <ChangeDisplay
                userName={user.displayName}
                setShow={setShow}
                setReloadApp={setReloadApp}
            />
        )
        setShow(true);

    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={10}>
                    <h2>Nombre de usuario : {user.displayName}</h2>
                </Grid.Column>
                <Grid.Column>

                    <Icon
                        name="pencil"
                        circular
                        size="large"
                        link
                        onClick={onClick}
                    />

                </Grid.Column>
            </Grid.Row>

        </Grid >
    );
}

const ChangeDisplay = ({ userName, setShow, setReloadApp }) => {
    const [formData, setFormData] = useState({
        displayName: userName
    });
    console.log(userName)
    const { displayName } = formData;

    const onSubmit = () => {
        if (formData.displayName === "" || formData.displayName === userName) {
            setShow(false);
        } else {
            firebase
                .auth()
                .currentUser
                .updateProfile({ displayName: formData.displayName }).then(() => {
                    toast.success("Se ha cambiado el nombre de usuario exitosamente")
                    setShow(false);
                    setReloadApp(prevState => !prevState)
                }).catch(() => {
                    console.log("Ha ocurrido un error")
                })
        }
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Field>
                <Input
                    defaultValue={userName}
                    onChange={e => setFormData({ displayName: e.target.value })}
                />
                <Button
                    type="submit"
                >
                    Actualizar Nombre
                </Button>
            </Form.Field>
        </Form>
    )

}

export default Username;