import React from 'react';
import { Route, Router } from 'react-router';

import TicTacToe from '../modules/tic-tac-toe/components/TicTacToe';
import FetchPokemon from '../modules/fetch-pokemon/FetchPokemon';
import history  from '../state/history'




const Routes = () => {
    return (
        <Router history={history}>
            <Route exact path="/tic-tac-toe" component={TicTacToe} />
            <Route exact path="/pokemon" component={FetchPokemon} />
        </Router>
    )
}

export default Routes;
