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

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear() == year
  );

  let expensesContent = <p>No expenses for this year</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
        key={expense.id}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={year} onFilterYear={filterYearHandler} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
