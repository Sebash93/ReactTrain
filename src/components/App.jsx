import React from 'react'
import styles from './App.css'

import { NewTrip } from './newTrip/NewTrip.jsx'
import { ViewTrips } from './viewTrips/ViewTrips.jsx'  

const TRIPS = [
    {
        id: 1,
        driver: "Sebastian Hernandez",
        to: "Envigado, Las Antillas",
        from: "Ruta N",
        passBy: "Av Regional, Parque de Envigado, Cancha del Dorado"
    }
]

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: TRIPS,
            count: TRIPS.length
        }

        this.addNewTrip = this.addNewTrip.bind(this);
    }

    addNewTrip(newTrip) {
        console.log("NewTrips", newTrip)
        newTrip.id = this.state.count + 1;
        this.setState({
            trips: [...this.setState.trips, newTrip],
            count: this.state.count + 1
        })
        console.log("TRIIPS", this.state.trips);
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