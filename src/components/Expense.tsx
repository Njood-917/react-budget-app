import React , {useState , ChangeEvent,FormEvent} from "react";

export default function Expense() {
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
function getExpenseAmount(event: ChangeEvent<HTMLInputElement>) {
  setUserInput({ ...userInput, amount: Number(event.target.value) });
}
function getExpenseDate(event:ChangeEvent<HTMLInputElement>) {
  console.log(event.target.value);
  setUserInput({ ...userInput, date: new Date(event.target.value) });
}

function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setuesrEnformationList([...uesrEnformationList, userInput]);

  // Reset the userInput state to empty or default values
  setUserInput({ name: "", amount: 0, date: new Date() });

}
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Expense source:  </label>

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

          <input type="date" name="Date of Expense"
          value={userInput.date.toString()}
          onChange={getExpenseDate} />
        </div>

        <button>Add Expense</button>
      </form>
  
      {uesrEnformationList.map((user, index) => (
        <div key={index}>
          <ul>
            <li>
              {user.name}:{user.amount}SAR on {user.date.toDateString()}
            </li>
          </ul>
          {/*we need to string to render the date to ensure that'not object */}
        </div>
      ))}
      </div>
  );
}


