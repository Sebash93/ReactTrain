import React from 'react'

export class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        let newUser = {
            name: this.state.name,
            email: this.state.email
        }
        console.log("Creating user", newUser);
    }

    render() {
        return (
            <div>
                <h1>Crea una cuenta</h1>
                <form className="registerForm" onSubmit={this.handleSubmit}>
                    <label>
                        Nombre Completo
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Email
                        <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Crear usuario" />
                </form>
            </div>
        )
    }
}