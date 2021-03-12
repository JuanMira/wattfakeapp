import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { Form, Input, Image, TextArea, Button, Checkbox } from 'semantic-ui-react';
import ImageBook from '../../asstes/5946.jpg';
import { v4 as uuid } from 'uuid';
import { useDropzone } from 'react-dropzone';
import firebase from '../../utils/firebase';
import "firebase/storage";
import "firebase/firebase";
import "./CreateHistory.scss";

const db = firebase.firestore(firebase);

const CreateHistory = ({ user }) => {

    const [formData, setFormData] = useState({
        historyId: uuid(),
        title: '',
        description: '',
        history: '',
        idAuthor: user.uid,
        author: user.displayName,
        anon: false,
        able: true
    });
    const [loading, setLoaading] = useState(false);
    const [bookURL, setBookURL] = useState(null);

    const onDrop = useCallback(accepted => {
        const file = accepted[0];
        setBookURL(URL.createObjectURL(file));
        uploadImage(file).then(res => {
            console.log("")
        })
    })
    const uploadImage = file => {
        const ref = firebase.storage().ref().child(`books/${formData.historyId}`)
        return ref.put(file)
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        onDrop
    });

    const onSubmit = e => {
        e.preventDefault();
        if (formData.title === '' || formData.description === '' || formData.history === '') {
            toast.warning('Ha ocurrido un error')
            return
        }

        setLoaading(true);
        setTimeout(() => {
            const createHistory = async () => {
                await axios({
                    method: 'POST',
                    url: 'http://localhost:4000/api/books',
                    params: formData
                }).then(res => {
                    toast.success(res.data.message);
                    setFormData({
                        historyId: '',
                        title: '',
                        description: '',
                        history: '',
                        idAuthor: '',
                        author: '',
                        anon: false,
                        able: true
                    })
                }).catch(err => {
                    console.log(err)
                });
            }
            if (formData.author !== '' && formData.historyId !== '' && formData.idAuthor !== '') {
                createHistory();
                setBookURL(null);
            }
            setLoaading(false);
        }, 2000)


    }

    return (
        <div className="container create-history">
            <Form onSubmit={onSubmit}>
                <div className="row">
                    <div className="five columns">
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            {isDragActive ?
                                <Image />
                                :
                                <Image
                                    src={bookURL ?
                                        bookURL
                                        :
                                        'https://react.semantic-ui.com/images/wireframe/image-text.png'
                                    }
                                />
                            }
                        </div>

                    </div>
                    <div className="seven columns">
                        <div className="row">
                            <div className="row">
                                <div className="row">
                                    <Input
                                        placeholder="Nombre de la historia"
                                        fluid onChange={
                                            e => setFormData({
                                                ...formData,
                                                title: e.target.value
                                            })}
                                        value={formData.title}
                                    />
                                </div>
                                <div className="row">
                                    <TextArea
                                        placeholder="Descripcion"
                                        size="huge"
                                        className="descripcion"
                                        rows={4}
                                        onChange={
                                            (e, data) => setFormData({
                                                ...formData,
                                                description: data.value
                                            })
                                        }
                                        value={formData.description}
                                    />
                                </div>
                                <div className="row">
                                    <TextArea
                                        placeholder="Cuenta tu historia"
                                        size="huge"
                                        rows={250}
                                        onChange={
                                            (e, data) => setFormData({
                                                ...formData,
                                                history: data.value
                                            })
                                        }
                                        value={formData.history}
                                    />
                                </div>
                                <div className="row">
                                    <div className="five columns">
                                        <label>Anonimo</label>
                                    </div>
                                    <div className="five columns">
                                        <Checkbox
                                            toggle
                                            className="check"
                                            value={formData.anon ? false : true}
                                            checked={formData.anon}
                                            onClick={(e, data) => setFormData({
                                                ...formData,
                                                anon: data.value
                                            })}
                                        />
                                    </div>
                                </div>
                                <Button fluid loading={loading}>Publicar</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </Form>
        </div>
    );
}



export default CreateHistory;