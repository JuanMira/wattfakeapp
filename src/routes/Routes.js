import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from '../components/Profile/Profile';
import Settings from '../components/Settings/Settings';

//Pages
const Routes = ({ user }) => {
    return (
        <Switch>
            <Route path="/" exact>
                <h1>Inicio</h1>
            </Route>
            <Route path="/profile" exact>
                <Profile user={user} />
            </Route>
            <Route path="/settings" exact>
                <Settings user={user} />
            </Route>
            <Route path="/viewHistorys">
                <h1>Ver historias</h1>
            </Route>
            <Route path="/createHistory">
                <h1>Escribir historia</h1>
            </Route>
        </Switch>
    )
}

export default Routes;