import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import TicTacToeStyle from './TicTacToeStyle'
import Board from './Board';

const useStyle = makeStyles(TicTacToeStyle, { name: 'TicTacToe' })

const TicTacToe = () => {
    const [player, setPlayer] = useState('X');
    const [winner, setWinner] = useState();
    const classes = useStyle()
    
    const changePlayer = (newPlayer) => {
        setPlayer(newPlayer);
    }
    
    const changeWinner = (newWinner) => {
        setWinner(newWinner);
    }

    return (
        <div className={classes.first} >
            <h1>Tic-Tac-Toe</h1>
            { winner ? <h3>{winner} Wins </h3> : <h3>It's {player} turn</h3>}
            <div>
            <Board onPlayerChange={changePlayer} onWinnerChange={changeWinner} />
            </div>
        </div>
    )

}

export default TicTacToe;
