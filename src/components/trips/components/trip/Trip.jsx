import React from 'react'
import styles from './Trip.css'

export class Trip extends React.Component {
    render() {
        return (
        <div>
                <b>Hacia:</b> {this.props.data.to}<br />
                <b>Desde:</b> {this.props.data.from}<br />
                <b>Pasa por:</b> {this.props.data.passBy}<br />
                <b>Conductor:</b> {this.props.data.driver}<br />
        </div>
        )
    }
}