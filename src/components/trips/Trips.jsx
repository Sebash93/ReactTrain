import React from 'react'
import styles from './Trips.css'
import { Router, Route } from 'react-router';

import { NewTrip } from './components/newTrip/NewTrip.jsx'
import { ViewTrips } from './components/viewTrips/ViewTrips.jsx'

let TRIPS = [
    {
        id: 1,
        driver: "Sebastian Hernandez",
        to: "Envigado, Las Antillas",
        from: "Ruta N",
        passBy: "Av Regional, Parque de Envigado, Cancha del Dorado"
    }
]

export class Trips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: TRIPS,
            counter: TRIPS.length
        }

        this.addNewTrip = this.addNewTrip.bind(this);
    }

    addNewTrip(newTrip) {
        newTrip.id = this.state.counter + 1;
        this.setState((prevState) => ({
            trips: prevState.trips.concat(newTrip),
            counter: prevState.counter + 1
        }))
    }

    render() {
        return (
            <div className="container">
                <NewTrip onNewTrip={this.addNewTrip}></NewTrip>
                <ViewTrips trips={this.state.trips} />
            </div>
        )
    }
}