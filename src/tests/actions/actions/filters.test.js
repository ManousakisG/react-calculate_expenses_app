import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../../actions/filters';
import moment from 'moment';


test('should generate set start date object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    });
});

test('should generate set end date object', () => {
    const action =setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate set text filter object with value', () => {
    const text= 'application testing';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'application testing'
    });
});

test('should generate set text filter object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    });
});

test('should generate sort by date object', () => {
    const action = sortByDate();
    expect(action).toEqual ({
        type:'SORT_BY_DATE'
    });
});

test('should generate sort by amount object', () => {
    const action = sortByAmount();
    expect(action).toEqual ({
        type:'SORT_BY_AMOUNT'
    });
});

