import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditexpensePage from '../components/EditexpensePage';
import ErrorPage from '../components/ErrorPage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
        <Route path='/' exact={true} component={ExpenseDashBoardPage} />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route component={ErrorPage}/>
    </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;