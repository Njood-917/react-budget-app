import React from "react";

function Expense() {
  return (
    <div>
      <form action="">
        <label htmlFor="Expense source">
          Expense source:
          <input
            type="text"
            name="Expense source"
            placeholder="Electircity bill"
          />
        </label>
        <br />
        <label htmlFor="Amount of Expense">
          Amount of Expense:
          <input type="text" name="Amount of Expense " />
        </label>
        <br />
        <label htmlFor="Date of Expense">
          Date of Expense:
          <input type="Date" name="Date of Expense" />
        </label>
        <br />
        <button>Add Expense</button>
      </form>
    </div>
  );
}

export default Expense;
