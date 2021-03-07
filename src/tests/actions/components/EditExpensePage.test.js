import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import {EditExpensePage} from '../../../components/EditExpensePage';

let editExpense, removeExpense, history, wrapper;

beforeEach (() => {
    editExpense = jest.fn(); //it is a spy
    removeExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense} 
        removeExpense={removeExpense} 
        history={history} 
        expense={expenses[2]}
        />
    );
});


//should render EditExpensePage
//snapshot
test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});


//should handle editExpense
//spies
test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/'); //test spy!!!
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});


//should handle removeExpense
//spies

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/'); //test spy!!!
    expect(removeExpense).toHaveBeenLastCalledWith( { 
    id: expenses[2].id
});
});