import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//ADD_EXPENSE


const addExpense = (
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
const removeExpense = ({id}={}) => ({
    type: 'REMOVE_EXPENSE',
        id
});

//EDIT_EXPENSE

const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});

//SET_TEXT_FILTER
const setTextFilter =(text='') => ({
    type:"SET_TEXT_FILTER",
    text
});

//SORT_BY_DATE
const sortByDate = () => ({
    type:"SORT_BY_DATE"
});


//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type:"SORT_BY_AMOUNT"
});

//SET_START_DATE
const setStartDate = (startDate) =>({
    type:"SET_START_DATE",
    startDate
});

//SET_END_DATE
const setEndDate = (endDate) => ({
    type:"SET_END_DATE",
    endDate
});
//Expenses Reducer

const expensesReducerDefaultState= [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
           return [...state,action.expense]; //ES6 spread operators state.concat(action.expense)
        case 'REMOVE_EXPENSE': // SOS !!!!!!!!! REMOVE!
            return state.filter(({id}) => {
                return id!==action.id;
            });
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense, // ES6 object spreading here : Grab all the previous values and overwrite updates 
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });
        
        default:
        return state;
    }
};

//Filters Reducer

const filtersReducerDefaultState= {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text //ES6 object spreading here : Grab all the previous values and overwrite text!
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy : 'amount'
            };
        case "SORT_BY_DATE":
            return { 
                ...state,
                sortBy: 'date'
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

//Get visible expenses by filtering them and then USE SORT !!
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt >= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        //figure out if expenses.description has the text variable string inside of it
        //includes
        //and convert both strings to lower case

        return startDateMatch && endDateMatch && textMatch;

    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};


//Create Store

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);



store.dispatch(addExpense({description: 'Water bill'}));
store.dispatch(addExpense({description: 'Gas bill'}));
//const StoreItemOne = store.dispatch(AddExpense({description: 'Rent', amount: 500, createdAt: -250}));
//const StoreItemTwo = store.dispatch(AddExpense({description: 'Coffee', amount: 300, createdAt: -100}));
store.dispatch(setTextFilter('water'));

    const state = store.getState();
    const visibleExpenses =getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
// check if there is 'e' string in any of the items!
/* console.log(StoreItemOne);
store.dispatch(removeExpense({id: StoreItemOne.expense.id}));
store.dispatch(editExpense(StoreItemTwo.expense.id,{amount:500}));

store.dispatch(setTextFilter());
store.dispatch(sortByAmount());*/
//store.dispatch(sortByDate()); // action to sortByDate

/*  store.dispatch(setStartDate(125));
 store.dispatch(setEndDate(400)); */
const demoState = {
    expenses : [{
        id: '332423423',
        description: 'January Rent',
        note: 'This was the final payment',
        amount: 55555,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amouunt',
        startDate: undefined,
        endDate: undefined
    }
};