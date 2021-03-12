import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Dropdown } from 'semantic-ui-react';
import firebase from '../../utils/firebase';
import "firebase/auth";
import "./NavBar.scss";
const NavBar = ({ user }) => {

    const sessionHandler = () => {
        firebase.auth().signOut().then(res => {
            console.log("session cerrada")
        }).catch(err => {
            console.error(err)
        })
    }


    return (
        <div>
            <Menu size="huge" fixed='top'>
                <Menu.Item
                    to="/"
                    as={Link}
                    name="home"
                    link
                >
                    <Icon name="home" /> Inicio
                    </Menu.Item>
                <Menu.Item
                    to="/createHistory"
                    as={Link}
                    name="writeHistory"
                    link
                >
                    <Icon name="pencil alternate" /> Escribir historia
                </Menu.Item>
                <Menu.Item
                    to="/viewHistorys"
                    as={Link}
                    name="viewHistory"
                    link
                >
                    <Icon name="book" /> Ver mis historias
                </Menu.Item>

                <Menu.Menu position="right">
                    <Dropdown item text={user.displayName}>
                        <Dropdown.Menu>
                            <Dropdown.Item
                                as={Link}
                                to="/profile"
                            >
                                <Icon name="user circle" />Ver perfil
                            </Dropdown.Item>
                            <Dropdown.Item
                                as={Link}
                                to="/settings"
                                name="settings"
                            >
                                <Icon name="cog" />Configuracion de la cuenta
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={sessionHandler}
                            >
                                <Icon
                                    name="power off"
                                /> Cerrar sesión
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
        </div >
    );
}

export default NavBar;