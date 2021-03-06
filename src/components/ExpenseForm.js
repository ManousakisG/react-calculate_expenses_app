import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
        description: props.expense ? props.expense.description: '',
        note: props.expense ? props.expense.note: '',
        amount: props.expense ? (props.expense.amount/ 100).toString() : '',
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        calendarFocused: false,
        error:''
    };
    }      
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }
    onAmountChange = (e) => {
        const amount=e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) { //Regular expression (REGEX) type only numbers with two digits after comma
            this.setState(() => ({amount}));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ( { focused }) => {
        this.setState(() => ({ calendarFocused: focused}));
    };
    onSubmit = (e) => { // preventDefault in event handler stops PAGE REFRESH!!!
        e.preventDefault(); //we have to fake this one function! 
        
        if (!this.state.description || !this.state.amount) {
            //set error state equal to 'Please provide description and amount
            const error = 'Please provide description and amount';
            this.setState(() => ({error}));
        } else {
            //Clear error
            const error= '';
            this.setState(() => ({error}));
            this.props.onSubmit ({ //FORMAT The elements! Call onSubmit from AddExpensePage and console.log!
                description:this.state.description,
                amount:parseFloat(this.state.amount, 10)*100, //make the string to a float number and format it
                createdAt:this.state.createdAt.valueOf(), //make the moment object to a new format of a regular number
                note:this.state.note
            });
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}> 
                    <input 
                    type='text'
                    placeholder='Description'
                    autoFocus
                    value = {this.state.description}
                    onChange={this.onDescriptionChange}
                    />
                    <input
                    type='text'
                    placeholder='Amount'
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange= {this.onFocusChange}
                    numberOfMonths={1} //show 1 month only
                    isOutsideRange={()=> false} //make every day (even past) available!!
                    />
                    <textarea 
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    placeholder= 'Add a note for your expense (optional)'
                    >
                    </textarea>
                    <button> Add Expense</button>
                </form>
            </div>
        );
    }
}