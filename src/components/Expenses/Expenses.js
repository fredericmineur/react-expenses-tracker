import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const filterYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={year} onFilterYear={filterYearHandler} />
      {props.items.map(expense => 
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          key = {expense.id}
        />
      )}
    </Card>
  );
};

export default Expenses;
