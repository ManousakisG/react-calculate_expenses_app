import expensesReducer from '../../../reducers/expenses';
import expenses from '../fixtures/expenses';

//test for default
test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

//test to remove by id

test('should remove expense by id', () => {
    const action ={
        type:'REMOVE_EXPENSE',
        id: expenses[2].id
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0], expenses[1]]);
});

//test not remove by id

test('should not remove expense if id not found', () => {
    const action ={
        type:'REMOVE_EXPENSE',
        id:'123'
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});


//test to add expense

test('should add expense', () => {
    const expense ={ 
        id:'1',
        description: 'Gum',
        note: '',
        amount:195,
        createdAt:0
    };
    const action ={ 
    type:'ADD_EXPENSE',
    expense
    };
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,action.expense])
});

//test to edit expense by id

test('should edit expense', () => {
    const description='Changed';
    const action ={ 
    type:'EDIT_EXPENSE',
    id:expenses[0].id,
    updates:{
        description
    }
    };
    const state=expensesReducer(expenses,action);
    expect(state[0].description).toEqual(description)
});


//test not to edit expense if not there

test('should not edit expense if not there', () => {
    const description='Changed';
    const action ={ 
    type:'EDIT_EXPENSE',
    id:'-1',
    updates:{
        description
    }
    };
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses)
});
