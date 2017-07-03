import React from 'react'
import styles from './ViewTrips.css'

import { Trip } from '../trip/Trip.jsx'

export class ViewTrips extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const tripsList = this.props.trips
            .map((trip) => <Trip key={trip.id} data={trip} />)
        return (<div>{tripsList}</div>)
    }
}