import React, { useState } from "react";

import "./style.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [status, setStatus] = useState(false);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const reset = () => {
    setTitle("");
    setAmount(0);
    setDate("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = { title, amount, date: new Date(date) };
    props.onSaveNewExpense(expenseData);
    reset();
    setStatus(false);
  };

  const showHideHandler = () => {
    status ? setStatus(false) : setStatus(true);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        style={{ display: status ? "block" : "none" }}
        onSubmit={submitHandler}
      >
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={titleChangeHandler}
              value={title}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              min={"0.01"}
              step={"0.01"}
              name="amount"
              id="amount"
              onChange={amountChangeHandler}
              value={amount}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              min={"2019-01-01"}
              max={"2023-12-31"}
              name="date"
              id="date"
              onChange={dateChangeHandler}
              value={date}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={showHideHandler}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
      <button
        style={{ display: status ? "none" : "block" }}
        type="button"
        onClick={showHideHandler}
      >
        Add New Expense
      </button>
    </div>
  );
};

export default ExpenseForm;
