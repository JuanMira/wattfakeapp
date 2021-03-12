import React, { useState, useCallback } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import UserIcon from '../../assets/profile-user.svg';
import { useDropzone } from 'react-dropzone';
import firebase from '../../utils/firebase';
import "firebase/auth";
import "firebase/storage";
import Username from '../settingsOptions/UserName';
import BasicModal from '../Modal';
import Password from '../settingsOptions/Password';

const Settings = ({ user, setReloadApp }) => {

    const [show, setShow] = useState(false);
    const [contentModal, setContentModal] = useState(null);
    const [title, setTitle] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(user.photoURL);
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        setAvatarUrl(URL.createObjectURL(file));
        uploadImage(file).then(() => {
            updateUserPhoto()
        }).catch(err => {
            console.log(` El error es ${err} `)
        })
    });

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        onDrop
    });

    const updateUserPhoto = () => {
        firebase.storage().ref(`avatar/${user.uid}`).getDownloadURL().then(async res => {
            await firebase.auth().currentUser.updateProfile({ photoURL: res })
        }).catch(err => {
            console.log("Error no mames")
        })
    }

    const uploadImage = file => {
        const ref = firebase.storage().ref().child(`avatar/${user.uid}`);
        return ref.put(file);
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={8}>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <Image src={UserIcon} size='medium' circular />
                        ) : (
                            <Image src={avatarUrl ? avatarUrl : UserIcon} size='medium' circular />
                        )}

                    </div>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Grid.Row>
                        <Username
                            user={user}
                            setShow={setShow}
                            setContentModal={setContentModal}
                            setTitle={setTitle}
                            setReloadApp={setReloadApp}
                        />
                    </Grid.Row>
                    <Grid.Row>
                        <Password
                            user={user}
                            setShow={setShow}
                            setContentModal={setContentModal}
                            setTitle={setTitle}
                            setReloadApp={setReloadApp}
                        />
                    </Grid.Row>
                </Grid.Column>
            </Grid.Row>
            <BasicModal
                show={show}
                setShow={setShow}
                title={title}
                children={contentModal}
            />
        </Grid>
    );
}
export default Settings;