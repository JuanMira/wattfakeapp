import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Form, Icon, TextArea } from 'semantic-ui-react';
const Descrption = ({ user }) => {

    const [description, setDescription] = useState({
        userId: user.uid,
        description: ''
    })

    const onSubmit = e => {
        e.preventDefault()
        if (description.description.trim() === '') {
            toast.warning("No se pueden enviar campos vacios")
            return
        }
        axios({
            method: 'POST',
            url: 'http://localhost:4000/api/persona',
            params: description
        })

        setDescription({
            description: ''
        })

        toast.success('Descripcion creada correctamente')

    }

    return (
        <Form onSubmit={onSubmit}>
            <h2>Descripcion:</h2>
            <Icon
                name="pencil"
                circular
                size="large"
                link

            />
            < TextArea
                value={description.description}
                placeholder="Agrega tu descripcion"
                onChange={(e, data) =>
                    setDescription({
                        ...description,
                        description: data.value
                    })
                }
            />
            <Button type="submit" >Agregar</Button>
        </Form>
    );
}

export default Descrption;