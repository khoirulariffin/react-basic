import Card from "../Card/index";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesItem from "./ExpensesItem";
import "./style.css";

import React, { useEffect, useState } from "react";

const Expenses = ({ items }) => {
  const [newItems, setNewItems] = useState(items);

  const filteredExpense = (payload) => {
    const filteredItems = items.filter(
      (item) => item.date.getFullYear() === +payload
    );
    typeof payload !== "string"
      ? setNewItems(items)
      : setNewItems(filteredItems);
  };

  useEffect(() => {
    filteredExpense();
  }, [items]);

  return (
    <Card className="expenses">
      <ExpensesFilter onFilteredExpense={filteredExpense} items={newItems} />
      <ExpensesChart expenses={newItems} />
      {newItems.map((e) => (
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
