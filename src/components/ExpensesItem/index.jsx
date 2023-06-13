import Card from "../Card";
import ExpensesDate from "../ExpensesDate";
import "./style.css";

import React from "react";

function ExpensesItem(props) {
  return (
    <Card className="expense-item">
      <ExpensesDate date={props.date} />
      <section className="expense-item__description">
        <h2>{props.title}</h2>
        <section className="expense-item__price">${props.price}</section>
      </section>
    </Card>
  );
}

export default ExpensesItem;
