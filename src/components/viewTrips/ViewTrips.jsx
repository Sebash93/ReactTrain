import React from 'react'
import styles from './ViewTrips.css'

import { Trip } from '../trip/Trip.jsx'

export class ViewTrips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: props.trips
        }
    }

    render() {
        const tripsList = this.state.trips
            .map((trip) => <Trip key={trip.id} data={trip} />)
        return (<div>{tripsList}</div>)
    }
}