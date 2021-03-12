import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import TicTacToeStyle from './TicTacToeStyle'
import Tabuleiro from './Board';

const useStyle = makeStyles(TicTacToeStyle, { name: 'TicTacToe' })

const TicTacToe = () => {
    const classes = useStyle()
    const [player, setPlayer] = useState('X');
    

    const mudarPlayer = () => {
        const xEhoProximo = player === 'X';
        setPlayer(xEhoProximo ? 'O' : 'X');
    }

    return (
        <div className={classes.first} >
            <h1>Tic-Tac-Toe</h1>
            <h3>Player {player}, sua vez </h3>
            <div>
                <Tabuleiro player={player} onClick={mudarPlayer} estilo={classes.table}/>
            </div>
        </div>
    )

}

export default TicTacToe;
