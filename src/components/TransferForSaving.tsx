import React, {FormEvent, useState , ChangeEvent} from "react";


function TransferForSaving() {
 
    const [transferAmount, setTransferAmount] = useState(0);
    function onChangeHandler (event:ChangeEvent<HTMLInputElement>){
      // console.log(event.target.value); //i can get the value from user from event.target.value 
      setTransferAmount(Number(event.target.value)) // we put Number to return number bc the initial value 0
      }
     
        function handleSubmit(event:FormEvent){
          event.preventDefault();
          console.log(transferAmount)
          setTransferAmount(0); // to return the input empty
        }
  return (
    <div>
        <h3>Current Balance: 5930</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="amount">Transfer to Saving Amount </label>
                <input type="number"  name="amount" id="amount"
                value={transferAmount}
                onChange={onChangeHandler}/>
            </div>
            <button>Transfer</button>



        </form>
    </div>
  )
}

export default TransferForSaving