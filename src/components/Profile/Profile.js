import React, { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import MyProfile from '../MyProfile/MyProfile';
import "./Profile.scss"
const Profile = ({ user }) => {

    const [actualItem, setActualItem] = useState({
        activeItem: 'Perfil'
    });
    const [profileOption, setProfileOption] = useState("myProfile");



    const onClick = (e, { name }) => {
        setActualItem({ activeItem: name })
        if (profileOption === "myProfile") setProfileOption("myHistorys")
        else setProfileOption("myProfile")
    }

    const { activeItem } = actualItem;
    return (
        <div className="profile">
            <Menu pointing secondary>
                <Menu.Item
                    name="Perfil"
                    link
                    active={activeItem === "Perfil"}
                    onClick={onClick}
                />
                <Menu.Item
                    name="Historias"
                    link
                    active={activeItem === "Historias"}
                    onClick={onClick}
                />
            </Menu>
            <Segment>
                {profileOption === "myProfile" ? (
                    <MyProfile user={user} />
                ) : (
                    <h1>Mis Historias</h1>
                )}
            </Segment>
        </div >
    );
}

export default Profile;