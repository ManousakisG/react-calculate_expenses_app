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

export default expensesReducer;