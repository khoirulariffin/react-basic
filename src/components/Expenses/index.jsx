import Card from "../Card";
import ExpensesItem from "../ExpensesItem";
import "./style.css";

import React from "react";

function Expenses({ items }) {
  return (
    <Card className="expenses ">
      {items.map((e) => (
        <ExpensesItem
          key={e.id}
          title={e.title}
          price={e.amount}
          date={e.date}
        />
      ))}
    </Card>
  );
}
export default Expenses;
