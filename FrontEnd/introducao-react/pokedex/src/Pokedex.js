import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    constructor() {
        super();

        this.state = {
            indexPokemon: 0,
            pokemonType: 'All'
        }

        this.handlePokemon = this.handlePokemon.bind(this);
        
    }

    handlePokemon(numberOfPokemons) {
        this.setState( actualState => {
            return {
                indexPokemon: (actualState.indexPokemon == numberOfPokemons - 1) ? 0 : actualState.indexPokemon + 1,
            }
        } )
    }

    changeType(typeSkill){
        this.setState( () => ({pokemonType: typeSkill, indexPokemon: 0,}) )
    }

    filterPokemons(pokemons, typeSkill) {
        {
            if(this.state.pokemonType === 'All') {
                return pokemons
            } else {
                return pokemons.filter(({ type }) => type === typeSkill);
            }
        }
    }


    render() {
        const { pokemons } = this.props;
        const filteredPokemons = this.filterPokemons(pokemons, this.state.pokemonType);
        console.log(this.state.pokemonType, filteredPokemons)

        return (
            <div className="pokedex-container">
                <Pokemon pokemon={filteredPokemons[this.state.indexPokemon]}/>

                <div className="buttons">
                    <button onClick={(e) => this.handlePokemon(filteredPokemons.length)} disabled={ filteredPokemons.length <= 1 }>Próximo</button>

                    <button onClick={(e) => this.changeType("Fire")}>Fire</button>

                    <button onClick={(e) => this.changeType("Psychic")}>Psychic</button>

                    <button onClick={(e) => this.changeType("Electric")} >Electric</button>

                    <button onClick={(e) => this.changeType("Normal")}>Normal</button>

                    <button onClick={(e) => this.changeType("All")}>Todos</button>

                </div>

            </div>
        );  
    }
}

export default Pokedex