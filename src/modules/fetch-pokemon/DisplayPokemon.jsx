import { makeStyles } from "@material-ui/core/styles"
import DisplayPokemonStyles from './DisplayPokemonStyles';

const useStyle = makeStyles(DisplayPokemonStyles, { name: 'DisplayPokemon' })

const DisplayPokemon = (prop) => {

    const classes = useStyle();
    

    return (
        <div className={classes.divDisplay}>
            <img 
                src={prop.img}
                alt="Fetch a pokemon"
                className={`${prop.img ? classes.imgDisplay : ''}`}
            />
            <h2>{prop.pokemonName}</h2>
        </div>
    )

}

export default DisplayPokemon;
