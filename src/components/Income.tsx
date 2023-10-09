import React from "react";

function Income() {
  return (
    <div>
      <form action="">
        <label htmlFor="Income source">
          Income source:
          <input type="text" name="Income source" placeholder="salary" />
        </label>
        <br />
        <label htmlFor="Amount of Income">
          Amount of Income:
          <input type="number" name="Amount of Income " />
        </label>
        <br />
        <label htmlFor="Dateof Income">
          Date of Income:
          <input type="Date" name="Date of Income " />
        </label>
        <br />
        <button>Add Income</button>
      </form>
    </div>
  );
}

export default Income;
