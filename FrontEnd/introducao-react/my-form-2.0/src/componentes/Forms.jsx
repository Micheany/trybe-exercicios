import React from "react";

class Forms extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            error: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = ({ target }) => {

        if(target.value.length > 40) {
            this.setState({
                name: target.value.toUpperCase(),
                error: 'Limite de 40 caracteres',
            })
        } else {
            this.setState({
                name: target.value.toUpperCase(),
                error: '',
            })
        }
    }

    render() {

        return (
            <fieldset>
                <label>
                    Nome:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required  />
                    <span>{this.state.error}</span>
                </label>
            </fieldset>
        );
    }
}

export default Forms