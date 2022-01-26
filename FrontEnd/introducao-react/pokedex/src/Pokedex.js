import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    constructor() {
        super();

        this.state = {
            indexPokemon: 0,
        }

        this.handlePokemon = this.handlePokemon.bind(this);
        
    }

    handlePokemon() {
        this.setState( actualState => ({
            indexPokemon: actualState.indexPokemon + 1,
        }))
    }

    render() {
        const { pokemons } = this.props;
        return (
            <div className="pokedex-container">
                <Pokemon pokemon={pokemons[this.state.indexPokemon]}/>
            </div>
        );  
    }
}

export default Pokedex