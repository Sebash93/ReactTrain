import React from 'react'
import styles from './Nav.css'
import { Link } from 'react-router-dom'

export class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/'>Viajes</Link></li>
                    <li><Link to='/user'>Usuario</Link></li>
                    <li><Link to='/user/register'>Registrarse</Link></li>
                </ul>
            </nav>)
    }
}