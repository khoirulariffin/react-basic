import Card from "../Card/index";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesItem from "./ExpensesItem";
import "./style.css";

import React from "react";

const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
      <ExpensesFilter />
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
};
export default Expenses;
