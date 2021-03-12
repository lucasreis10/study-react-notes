import React, { useEffect, useState } from 'react';
import BoardStyles from './BoardStyles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const useStyle = makeStyles(BoardStyles, { name: 'Board' })

const Board = (prop) => {
    const classes = useStyle()
    
    const [board, setBoard] = useState(new Array(9).fill());
    const [history, setHistory] = useState([board]);
    const [player, setPlayer] = useState('X');
    const [winnerPosition, setWinnerPosition] = useState([]);

    
    const hasWinner = (boardState) => {
        const winners = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        
        const winner = winners
            .map((winnerPosition) => (boardState[winnerPosition[0]] && boardState[winnerPosition[0]] === boardState[winnerPosition[1]] && 
                                      boardState[winnerPosition[0]] === boardState[winnerPosition[2]]) 
                                      ? winnerPosition : null)
            .filter((result) => result)
            .flat();

        setWinnerPosition(winner);
        prop.onWinnerChange(winner.length ? boardState[winner[0]] : null);
    }

    const changePlayer = () => {
        setPlayer(player === 'X' ? 'O' : 'X');
    }

    useEffect(() => {
        prop.onPlayerChange(player); 
    }, [player]);

    const play = (index) => {
        if(!board[index] && winnerPosition.length === 0) {
            changePlayer();
            const nextBoard = [ ...board ];
            const newHistory = [ ...history ];
    
            nextBoard[index] = player;
            newHistory.push(nextBoard);
            
            hasWinner(nextBoard);
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
            hasWinner(lastBoard);
            changePlayer();
        }
        
    }

    const piece = (index) => (
        <div 
            onClick={() => play(index)} 
            className={`${classes.piece} 
                        ${(history.length === 10 && !winnerPosition.includes(index) && winnerPosition.length === 0)  ? classes.draw : ''} 
                        ${winnerPosition.includes(index) ? classes.winner : ''}`}
        >
            <span className={classes.fontPiece}>
                { board[index] }
            </span>
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
            <div>
                <Button onClick={revert} variant="contained" variant="outlined">
                    Revert
                </Button>
            </div>
        </div>
    )

}

export default Board;