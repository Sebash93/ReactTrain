import React from 'react'
import styles from './App.css'
import { Switch, Route } from 'react-router-dom'

import { Nav } from './nav/Nav.jsx'
import { Trips } from './trips/Trips.jsx'
import { UserProfile } from './userProfile/UserProfile.jsx'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Trips} />
                    <Route path="/user" component={UserProfile} />
                </Switch>
            </div>
        )
    }
}