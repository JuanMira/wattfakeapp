import React, { useState } from 'react';
import { Button, Icon, Grid, Form, Input } from 'semantic-ui-react';
import BasicModal from '../Modal';
const Username = ({ user, show, setShow }) => {

    const onClick = () => {
        setShow(true);
        <BasicModal
            show={show}
            setShow={setShow}
            title="Actualizar Nombre"
            children={<ChangeDisplay displayName={user.displayName} />}
        />
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

const ChangeDisplay = (displayName) => {
    const [formData, setFormData] = useState({
        displayName: displayName
    });

    return (
        <Form>
            <Form.Field>
                <Input
                    defaultValue={displayName}
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