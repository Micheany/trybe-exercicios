import React from "react";
import Pokemon from "./Pokemon";
import PropTypes from 'prop-types'

class Pokedex extends React.Component {
    render() {
        const { pokemons } = this.props;
        return (
            <div>
                { pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}/> ) }
            </div>
        );  
    }
}

Pokedex.propTypes = {
    pokemon: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        }),
        image: PropTypes.string,
    })
}

export default Pokedex