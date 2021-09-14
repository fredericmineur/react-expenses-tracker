import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
    }

    const hideFormHandler = () => {
        setShowForm(false);
        setShowButton(true);
    }
    const showFormHandler = () => {
        setShowForm(true);
        setShowButton(false);
    }
    const expenseForm = <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} onCancelForm={hideFormHandler}/>
    const buttonAddExpense = <button onClick={showFormHandler}>Add new expense</button>
    return (
        <div className='new-expense'>
            
            {showForm ? expenseForm : null}
            {showButton? buttonAddExpense: null}
        </div>
    );
}

export default NewExpense;