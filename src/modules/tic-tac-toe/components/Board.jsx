import React, { useState } from 'react';
import BoardStyles from './BoardStyles';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(BoardStyles, { name: 'Board' })

const Board = (prop) => {
    const classes = useStyle()

    const [quadrados, setQuadrados] = useState(new Array(9).fill());
    const [historicoDeJogadas, setHistoricoDeJogadas] = useState([quadrados]);

    const registrarJogada = (index) => {
        if(!quadrados[index]) {
            prop.onClick();
            const cloneQuadrados =  [ ...quadrados ];
            const cloneHistoricoDeJogadas = [ ...historicoDeJogadas ];
    
            cloneQuadrados[index] = prop.player;
            cloneHistoricoDeJogadas.push(cloneQuadrados);
    
            setHistoricoDeJogadas(cloneHistoricoDeJogadas);
            setQuadrados(cloneQuadrados);
        }
    }

    const reverterUltimaJogada = () => {
        if(historicoDeJogadas.length > 1) {
            const cloneHistoricoDeJogadas = [ ...historicoDeJogadas ];
            cloneHistoricoDeJogadas.pop();
    
            const ultimoItemHistoricoDeJogadas = cloneHistoricoDeJogadas[cloneHistoricoDeJogadas.length - 1]
    
            setHistoricoDeJogadas(cloneHistoricoDeJogadas);
            setQuadrados(ultimoItemHistoricoDeJogadas);
        }
        
    }


    const elementDiv = (index) => (
        <div 
            onClick={() => registrarJogada(index)}
            style={{
                backgroundColor: '#dcdcdc',
                width: '75px',
                height: '75px',
            }}
        >
            { quadrados[index] }
                
        </div>
    )

    return (
        <div className={classes.alignTable}>
            <table >
                <tbody>
                    <tr>
                        <td>{elementDiv(0)}</td>
                        <td>{elementDiv(1)}</td>
                        <td>{elementDiv(2)}</td>
                    </tr>
                    <tr>
                        <td>{elementDiv(3)}</td>
                        <td>{elementDiv(4)}</td>
                        <td>{elementDiv(5)}</td>
                    </tr>
                    <tr>
                        <td>{elementDiv(6)}</td>
                        <td>{elementDiv(7)}</td>
                        <td>{elementDiv(8)}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={reverterUltimaJogada}>
                Reverter Jogada
            </button>
        </div>
    )

}

export default Board;