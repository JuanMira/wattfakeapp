import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from '../components/Profile/Profile';
import Settings from '../components/Settings/Settings';
import CreateHistory from '../pages/CreateHistory/CreateHistory';
import Home from '../pages/Inicio/Home';
import { Container } from 'semantic-ui-react';
import History from '../pages/History/History';
import MyHistory from '../pages/MyHistorys/MyHistorys';
//Pages
const Routes = ({ user, setReloadApp }) => {
    const id = user.id;
    return (
        <Switch>
            <Route path="/" exact>
                <Container style={{ marginTop: '7em' }}>
                    <Home user={user} />
                </Container>
            </Route>
            <Route path="/profile" exact>
                <Container style={{ marginTop: '7em' }}>
                    <Profile user={user} />
                </Container>
            </Route>
            <Route path="/settings" exact>
                <Container style={{ marginTop: '7em' }}>
                    <Settings user={user} setReloadApp={setReloadApp} />
                </Container>
            </Route>
            <Route path="/viewHistorys">
                <Container style={{ marginTop: '7em' }}>
                    <MyHistory user={user} userId={id} />
                </Container>
            </Route>
            <Route path="/createHistory">
                <Container style={{ marginTop: '7em' }}>
                    <CreateHistory user={user} />
                </Container>
            </Route>
            <Route path="/history/:id/:idUser">
                <Container style={{ marginTop: '7em' }}>
                    <History />
                </Container>
            </Route>
        </Switch>
    )
}

export default Routes;