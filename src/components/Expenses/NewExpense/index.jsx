import React from "react";

import "./style.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const submitHandler = (payload) => {
    const expenseData = {
      ...payload,
      id: Math.floor(Math.random() * 101).toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <main className="new-expense">
      <ExpenseForm onSaveNewExpense={submitHandler} />
    </main>
  );
};

export default NewExpense;
