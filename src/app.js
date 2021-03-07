import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; // provide store to all components
import AppRouter from './routers/AppRouter';
import configureStore from '../src/store/configureStore';
import {addExpense} from '../src/actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount:500 }));
store.dispatch(addExpense({description: 'Gas bill'}));
store.dispatch(addExpense({description: 'Rent', amount:12500 }));
//store.dispatch(setTextFilter('water'));
/* 
setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000) // after 3 seconds there appears rent! */

const state = store.getState();
const visibleExpenses =getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (  // Provide store to all of my components ! With react-redux!
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
