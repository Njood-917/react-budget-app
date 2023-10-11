import React , {useState} from "react";

function Expense() {
  const [userInput, setUserInput] = useState({
    name: "",
    amount: 0,
    date: new Date(),
  });
  const [uesrEnformationList, setuesrEnformationList] = useState<
  { name: string; amount: number; date: Date }[]
>([]);

function getExpenseSource(event: React.ChangeEvent<HTMLInputElement>) {
  setUserInput({ ...userInput, name: event.target.value });
}
function getExpenseAmount(event: React.ChangeEvent<HTMLInputElement>) {
  console.log(event.target.value);
  setUserInput({ ...userInput, amount: Number(event.target.value) });
}
function getExpenseDate(event: React.ChangeEvent<HTMLInputElement>) {
  console.log(event.target.value);
  setUserInput({ ...userInput, date: new Date(event.target.value) });
}

function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setuesrEnformationList([...uesrEnformationList, userInput]);

  // Reset the userInput state to empty or default values
  setUserInput({ name: "", amount: 0, date: new Date() });

}
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="Expense">Expense source:</label>

          <input
            type="text"
            name="Expense source"
            placeholder="Electircity bill"
            value={userInput.name}
            onChange={getExpenseSource}
          />
        </div>

        <div>
          <label htmlFor="Amount">Amount of Expense:</label>

          <input type="number" name="Amount of Expense "
            value={userInput.amount}
            onChange={getExpenseAmount} />
        </div>

        <div>
          <label htmlFor="Date of Expense">Date of Expense: </label>

          <input type="Date" name="Date of Expense"
          value={userInput.date.toString()}
          onChange={getExpenseDate} />
        </div>

        <button>Add Expense</button>
      </form>
  
      {uesrEnformationList.map((user, index) => (
        <div key={index}>
          <ul>
            <li>
              {user.name}:{user.amount}{user.date.toDateString()}
            </li>
          </ul>
          {/*we need to string to render the date to ensure that'not object */}
        </div>
      ))}
      </div>
  );
}

export default Expense;
