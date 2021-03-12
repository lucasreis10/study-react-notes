import React, { useState } from 'react';
import BoardStyles from './BoardStyles';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(BoardStyles, { name: 'Board' })

const Board = (prop) => {
    const classes = useStyle()

    const [board, setBoard] = useState(new Array(9).fill());
    const [history, setHistory] = useState([board]);

    const play = (index) => {
        if(!board[index]) {
            prop.onClick();
            const nextBoard = [ ...board ];
            const newHistory = [ ...history ];
    
            nextBoard[index] = prop.player;
            newHistory.push(nextBoard);
    
            setHistory(newHistory);
            setBoard(nextBoard);
        }
    }

    const revert = () => {
        if(history.length > 1) {
            const lastHistory = [ ...history ];
            lastHistory.pop();
            
            const lastBoard = lastHistory[lastHistory.length - 1]

            setHistory(lastHistory);
            setBoard(lastBoard);
        }
        
    }


    const piece = (index) => (
        <div onClick={() => play(index)} className={classes.piece}>
            { board[index] }
                
        </div>
    )

    return (
        <div className={classes.container}>
            <table >
                <tbody>
                    <tr>
                        <td>{piece(0)}</td>
                        <td>{piece(1)}</td>
                        <td>{piece(2)}</td>
                    </tr>
                    <tr>
                        <td>{piece(3)}</td>
                        <td>{piece(4)}</td>
                        <td>{piece(5)}</td>
                    </tr>
                    <tr>
                        <td>{piece(6)}</td>
                        <td>{piece(7)}</td>
                        <td>{piece(8)}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={revert}>
                Revert
            </button>
        </div>
    )

}

export default Board;