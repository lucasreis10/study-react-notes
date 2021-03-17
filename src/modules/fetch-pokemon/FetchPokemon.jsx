import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayPokemon from './DisplayPokemon';
import DisplayLoading from './DisplayLoading';
import DisplayError from './DisplayError';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const fetchPokemonBy = async (name) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    
} 

const FetchPokemon = () => {
    
    const [pokemonsName, setPokemonsName] = useState('');
    const [pokemon, setPokemon] = useState({});
    const [componenteDisplay, setComponenteDisplay] = useState(<DisplayPokemon img={pokemon && pokemon.sprites ? pokemon.sprites.front_default : ''} pokemonName={pokemon.name}/>);

    const INITIAL_DISPLAY = (<DisplayPokemon img={pokemon && pokemon.sprites ? pokemon.sprites.front_default : ''} pokemonName={pokemon.name}/>); 

    useEffect(() => {
        // timeout configured only to display loading component
        setTimeout(() => {
            if(pokemon && pokemon.id) {
                setComponenteDisplay(INITIAL_DISPLAY);
            }
        }, 700);
    }, [pokemon]);

    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            fetch();
        }
    }

    const fetch = async () => {
        try {
            resetStates();
            setComponenteDisplay(<DisplayLoading />);
            const { data: pokemon } = await fetchPokemonBy(pokemonsName);
            setPokemon(pokemon);
        } catch(error) {
            setComponenteDisplay(<DisplayError />);
        }
    }

    const resetStates = () => {
        setPokemon({});
        setComponenteDisplay(INITIAL_DISPLAY);
    }

    const handleChange = (param) => {
        setPokemonsName(param.target.value);
    };

    return (
        <div>
            <h1>Fetch Pokemon</h1>
            
            <TextField label="Fetch pokemon"
                value={pokemonsName}
                onChange={handleChange} 
                onKeyDown={handleKeyDown}
            />
            <Button 
                variant="contained" 
                color="primary" 
                onClick={fetch}
            >
                Fetch
            </Button>

            { componenteDisplay }

        </div>
    );

}

export default FetchPokemon;