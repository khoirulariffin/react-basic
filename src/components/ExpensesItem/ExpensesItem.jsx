import ExpensesDate from "../ExpensesDate/ExpensesDate";
import "./style.css";

function ExpensesItem(props) {
  return (
    <main className="expense-item">
      <ExpensesDate date={props.date} />
      <section className="expense-item__description">
        <h2>{props.title}</h2>
        <section className="expense-item__price">${props.price}</section>
      </section>
    </main>
  );
}

export default ExpensesItem;
