import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../../src/components/EditExpensePage'
import ErrorPage from '../components/ErrorPage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
        <Route path="/" exact={true} component={ExpenseDashBoardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={ErrorPage}/>
    </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;