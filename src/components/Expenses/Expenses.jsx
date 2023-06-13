import ExpensesItem from "../ExpensesItem/ExpensesItem";
import "./style.css";

import React from "react";

function Expenses({ items }) {
  return (
    <main className="expenses ">
      {items.map((e) => (
        <ExpensesItem
          key={e.id}
          title={e.title}
          price={e.amount}
          date={e.date}
        />
      ))}
    </main>
  );
}
export default Expenses;
