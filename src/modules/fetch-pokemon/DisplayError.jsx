import { makeStyles } from "@material-ui/core/styles"
import DisplayErrorStyles from './DisplayErrorStyles';
import pikachuSad from '../../imgs/pikachu-not-foud.jpg';

const useStyle = makeStyles(DisplayErrorStyles, 'DisplayError')

const DisplayError = () => {

    const classes = useStyle();

    return (
        <div className={classes.divDisplay}>
            <h2>Prokemon Not Found</h2>
            <img 
                src={pikachuSad}
                className={classes.imgDisplay}
                height='20%'
                width='20%'
            />
        </div>
        
    )

}

export default DisplayError;
