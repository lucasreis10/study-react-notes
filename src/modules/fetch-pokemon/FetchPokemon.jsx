import React, { useState } from 'react';
import axios from 'axios';

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

    const getImage = () => {
        debugger;
        // pokemon.sprites.front_default
        return pokemon && pokemon.sprites ? pokemon.sprites.front_default : '';
    }

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
            
            <div style={{
                    marginTop: '15vh', 
                    marginLeft: '30vw',
                    borderStyle: 'dotted',
                    width: '50vw', 
                    height: '40vh',
                    display: 'flex',
                    flexDirection: 'column',
                    }}>
                <img 
                    src={pokemon && pokemon.sprites ? pokemon.sprites.front_default : ''}
                    alt="Pokemon's image"
                />
                <h3>{pokemon.name}</h3>
            </div>

        </div>
    );

}

export default FetchPokemon;