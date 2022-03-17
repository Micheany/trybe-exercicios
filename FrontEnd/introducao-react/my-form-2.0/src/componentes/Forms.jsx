import React from "react";

class Forms extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            errorname: '',
            email: '',
            erroremail: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = ({ target }, max) => {
        const { name } = target
        const error = `error${name}`;

        if(target.value.length > max) {
            this.setState({
                [name]: target.value.toUpperCase(),
                [error]: `Limite de ${max} caracteres`,
            })
        } else {
            this.setState({
                [name]: target.value.toUpperCase(),
                [error]: '',
            })
        }
    }

    render() {

        return (
            <fieldset>
                <label>
                    Nome:
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e, 40)} required  />
                    <span>{this.state.errorname}</span>
                </label>

                <label >
                    Email:
                    <input type="email" name="email" value={this.state.email} onChange={(e) => this.handleChange(e, 50)} />
                    <span>{this.state.erroremail}</span>
                </label>

                <label >
                    CPF:
                    <input type="text" name="cpf" value={this.state.email} onChange={(e) => this.handleChange(e, 200)} />
                </label>

            </fieldset>
        );
    }
}

export default Forms