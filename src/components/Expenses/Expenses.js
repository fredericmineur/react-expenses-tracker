import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {

  const [year, setYear] = useState('2020')

  const filterYearHandler = (selectedYear) => {
      setYear(selectedYear);
  }
  
  return (
    

      
      <Card className="expenses">
      <ExpensesFilter selectedYear={year} onFilterYear = {filterYearHandler}/>
        <ExpenseItem
          title={props.items[0].title}
          date={props.items[0].date}
          amount={props.items[0].amount}
        />
        <ExpenseItem
          title={props.items[1].title}
          date={props.items[1].date}
          amount={props.items[1].amount}
        />
        <ExpenseItem
          title={props.items[2].title}
          date={props.items[2].date}
          amount={props.items[2].amount}
        />
        <ExpenseItem
          title={props.items[3].title}
          date={props.items[3].date}
          amount={props.items[3].amount}
        />
      </Card>

  );
};

export default Expenses;
