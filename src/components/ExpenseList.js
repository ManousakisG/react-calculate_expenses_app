import React from 'react';
import {connect} from 'react-redux'; //connect a react component to a redux store!!
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p> No expenses</p>
            ) : (
                //<h1> Expense List</h1>
                props.expenses.map((expense) => {
                return <ExpenseListItem key= {expense.id} {...expense} />;
        })
     )
    }
    </div>
);

const mapStateToProps = (state)=> { // the data we need from the store!
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};


export default connect(mapStateToProps)(ExpenseList);