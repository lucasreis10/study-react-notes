import React, { useState } from 'react';
import axios from 'axios';
import DisplayPokemon from './DisplayPokemon';


const fetchPokemonBy = async (name) => {
    try {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    } catch(error) {
        console.error(`Erro ${error}`);
    }
    
} 

const FetchPokemon = () => {

    const [pokemonsName, setPokemonsName] = useState('');
    const [pokemon, setPokemon] = useState({});


    const fetch = async () => {
        const { data: pokemon } = await fetchPokemonBy(pokemonsName);
        setPokemon(pokemon);
    }

    const handleChange = (param) => {
        setPokemonsName(param.target.value);
    };

    return (
        <div>
            <h1>Fetch Pokemon</h1>
            
            <input 
                type="text" 
                placeholder="Pokemon's name" 
                value={pokemonsName}
                onChange={handleChange}
            />
            <button onClick={fetch}>Fetch</button>
        
            <DisplayPokemon 
                img={pokemon && pokemon.sprites ? pokemon.sprites.front_default : ''}
                pokemonName={pokemon.name}
            />

        </div>
    );

}

export default FetchPokemon;