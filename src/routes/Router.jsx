import React from 'react';
import { Route, Router } from 'react-router';
import TicTacToe from '../tic-tac-toe/TicTacToe';
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()


const Routes = () => {
    return (
        <Router history={history}>
            <Route exact path="/tic-tac-toe" component={TicTacToe} />
        </Router>
    )
}

export default Routes;
