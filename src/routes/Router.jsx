import React from 'react';
import Route from 'react-router';
import TicTacToe from '../tic-tac-toe/TicTacToe';

const Routes = () => {
    return (
        <Route exact path="/tic-tac-toe" component={TicTacToe} />
    )
}

export default Routes;
