import uuid from 'uuid';

//store action generators for expenses


//ADD_EXPENSE
export const addExpense = (
    { 
    description = '', // destructuring ! Define a value as a starting state! and then pass options with ADD_EXPENSE
    note='', 
    amount=0, 
    createdAt = 0 
    } = {}
    )    => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),// yarn add uuid@3.1.0 install id !!!
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE
export const removeExpense = ({id}={}) => ({
    type: 'REMOVE_EXPENSE',
        id
});

//EDIT_EXPENSE

export const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});