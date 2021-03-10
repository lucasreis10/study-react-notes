import React from 'react';
import { Route, Router } from 'react-router';

import TicTacToe from '../tic-tac-toe/TicTacToe';
import history  from '../state/history'




const Routes = () => {
    return (
        <Router history={history}>
            <Route exact path="/tic-tac-toe" component={TicTacToe} />
        </Router>
    )
}

export default Routes;
