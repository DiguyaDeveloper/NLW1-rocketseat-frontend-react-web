import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home'
import CreatePonint from './pages/CreatePoint'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={ Home } path="/" exact />
            <Route component={ CreatePonint } path="/create-point" />
        </BrowserRouter>
    );
}

export default Routes;