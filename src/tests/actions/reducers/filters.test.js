import filtersReducer from '../../../reducers/filters';
import moment from 'moment';

//test default state
test('should setup default filter value', () => {
    const state=filtersReducer(undefined, {type: '@@INIT' });
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

//test set text filter reducer

test('should set text filter', () => {
    const currentState={ 
        text:'this is a test text',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const text='this is a test!'
    const action = {
        type: "SET_TEXT_FILTER",
        text    
    };
    const state=filtersReducer(currentState, action);
    expect(state.text).toBe(text);
});

//test sort by amount reducer

test('should sort by amount', () => {
    const state=filtersReducer(undefined, {type: "SORT_BY_AMOUNT"});
    expect(state.sortBy).toBe('amount');
});

//test sort by date reducer
test('should sort by date', () => {
    const currentState= {
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const action = {type: "SORT_BY_DATE"};
    const state=filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});
//test set start date reducer
test('should set start date', () => {
    const startDate=moment(0).add(3,'days');
    const action = {
        type: "SET_START_DATE",
        startDate
    };
    const state=filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

//test set end date reducer

test('should set end date', () => {
    const endDate=moment(0).add(15,'days');
    const action = {
        type: "SET_END_DATE",
        endDate
    };
    const state=filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});