import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import UserIcon from '../../assets/profile-user.svg';
import "./MyProfile.scss";
const MyProfile = ({ user }) => {

    const [avatarUrl, setAvatarUrl] = useState(user.photoURL);
    const [description, setDescription] = useState({});

    console.log(description)
    console.log(user.uid)
    useEffect(() => {
        const restApi = async () =>
            await axios({
                method: 'GET',
                url: 'http://localhost:4000/api/persona',
                params: {
                    idUser: user.uid
                }
            }).then(res => setDescription(res.data))
        restApi()
    }, [user])

    return (
        <Grid>
            <div className="avatar">
                {!avatarUrl ? (
                    <Image src={UserIcon} size='medium' circular />
                ) : (<Image src={avatarUrl} size='medium' circular />)}
            </div>
            <div className="description">
                <h2>{user.displayName}</h2>
                <p>{!description ? "No tienes una descripcion agrega una" : description.description}</p>
            </div>
        </Grid>
    );
}

export default MyProfile;