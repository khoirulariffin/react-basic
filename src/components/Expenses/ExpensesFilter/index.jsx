import React, { useEffect, useState } from "react";

import "./style.css";

const ExpensesFilter = (props) => {
  const years = [2019, 2020, 2021, 2022, 2023];
  const [textYear, setTextYear] = useState("");

  const changeFilterHandler = (e) => {
    const filteredYear = e.target.value;
    const hiddenYears = years.filter((year) => year !== +filteredYear);
    setTextYear(hiddenYears);
    props.onFilteredExpense(!filteredYear ? years : filteredYear);
  };

  useEffect(() => {}, [props.items]);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={changeFilterHandler}>
          <option value="">Choose One</option>
          {years.map((year) => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
      {props.items.length === 0 && "No expenses found"}
    </div>
  );
};

export default ExpensesFilter;
