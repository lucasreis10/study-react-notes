import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import TicTacToeStyle from './TicTacToeStyle'
import Board from './Board';

const useStyle = makeStyles(TicTacToeStyle, { name: 'TicTacToe' })

const TicTacToe = () => {
    const classes = useStyle()
    const [player, setPlayer] = useState('X');
    

    const changePlayer = () => {
        setPlayer(player === 'X' ? 'O' : 'X');
    }

    return (
        <div className={classes.first} >
            <h1>Tic-Tac-Toe</h1>
            <h3>It's {player} turn</h3>
            <div>
                <Board player={player} onClick={changePlayer} />
            </div>
        </div>
    )

}

export default TicTacToe;
