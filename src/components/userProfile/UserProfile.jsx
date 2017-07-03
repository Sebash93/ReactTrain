import React from 'react'
import { Switch, Route } from 'react-router-dom'

import styles from './UserProfile.css'

import { Login } from './components/login/Login.jsx'
import { Register } from './components/register/Register.jsx'

export class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Welcome to my profile</h1>
                <Switch>
                    <Route exact path="/user" component={Login} />
                    <Route path="/user/register" component={Register} />
                </Switch>
            </div>)
    }
}