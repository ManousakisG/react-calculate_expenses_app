import React, { Component } from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

//testing 
//refactor editExpensePage to be a class based component
//setup mapDispatchToProps editExpense and removeExpense


export class EditExpensePage extends React.Component {
    onSubmit=(expense) => {
        //Dispatch the action to edit the expense
        this.props.editExpense(this.props.expense.id,expense);
        //Redirect to the dashboard
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.removeExpense({id: this.props.expense.id});
        this.props.history.push('/');
    };
    render() {
        return (
        <div>
        <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
        />
        <button onClick= {this.onRemove}> Remove</button>
        </div> 
        );
        }
    };

//Remove the expense via dispatch and then redirect to dashboard


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => { //search through an array with find()
            return expense.id === props.match.params.id;
        })}
};

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id,expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps ,mapDispatchToProps)(EditExpensePage);