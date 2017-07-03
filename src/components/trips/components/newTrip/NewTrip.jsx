import React from 'react'
import styles from './NewTrip.css'

export class NewTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {driver: "Sebas", from: "RutaN", to: "Envigado", passBy: "Autopista Sur"}

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        console.log("Send to Creat", this.state);
        event.preventDefault();
        let trip = {
            driver: this.state.driver, 
            from: this.state.from, 
            to: this.state.to, 
            passBy: this.state.passBy
        };
        this.props.onNewTrip(trip)
    }

    render() {
        return (
            <form className="newTripForm" onSubmit={this.handleSubmit}>
                <label>
                    ¿Como te llamas?:
                    <input type="text" name="driver" value={this.state.driver} onChange={this.handleInputChange} />
                </label>
                <label>
                    ¿Hacia donde vas?:
                    <input type="text" name="to" value={this.state.to} onChange={this.handleInputChange} />
                </label>
                <label>
                    ¿De donde sales?:
                    <input type="text" name="from" value={this.state.from} onChange={this.handleInputChange} />
                </label>
                <label>
                    ¿Por donde pasas?:
                    <input type="text" name="passBy" value={this.state.passBy} onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Crear viaje" />
            </form>)
    }
}