import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveExpenseData(expenseData);
  };


  return (
    <div className="new-expense">
        {(isEditing) && (<ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancelForm={() => setIsEditing(false)}
    />)}

      {(!isEditing) &&(<button 
      onClick={() => setIsEditing(true)}>Add new expense</button>) }
    </div>
  );
};

export default NewExpense;
