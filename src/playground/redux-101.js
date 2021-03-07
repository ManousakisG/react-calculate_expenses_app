import { createStore } from 'redux';

//create Store to use the State(s) from all components
//components can easily use the state value(s) and are also re-usable!
//install redux library to use redux store!


const store = createStore((state = {count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const increment = typeof action.incrementBy=== 'number' ? action.incrementBy : 1;
           return {
               count: state.count + increment
           };
        case 'DECREMENT':
            const decrementBy =typeof action.decrementBy==='number' ? action.decrementBy : 1;
           return {
               count: state.count - decrementBy
           };
        case 'RESET':
           return {
                count: 0
           };
        case 'SET':
            const setBy = typeof action.setTo ==='number'? action.setTo : 0;
            return{
                count: setBy
            };
        default:
            return state;
            
    }
});


//Actions (action) are objects that communicate to change the store by dispatching these actions.

 
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//store.dispatch is used to communicate the action(s) to the store!

store.dispatch({
    type :'INCREMENT', //convention to use uppercase characters!
    incrementBy: 5
});

store.dispatch({
    type: 'SET',
    setTo: 100
});

store.dispatch({
    type :'INCREMENT'
});

store.dispatch({
    type : 'RESET'
});

store.dispatch({
    type :'DECREMENT',
    decrementBy: 10
});


store.dispatch({
    type :'DECREMENT'
});
