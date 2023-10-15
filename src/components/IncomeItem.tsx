import React from "react";
import { IncomeType } from "../types/types";

type Prop = {
  user: IncomeType;
  uesrEnformationList: IncomeType[];
  setuesrEnformationList: React.Dispatch<React.SetStateAction<IncomeType[]>>
};
export default function IncomeItem(prop: Prop) {
  function handleDelet(userInformation: IncomeType) {
    const result = prop.uesrEnformationList.filter(
      (item) => item.id !== userInformation.id
    );
    prop.setuesrEnformationList(result);

    console.log(result, "result");
  }

  return (
    <div>
      <div>
        <ul>
          <li>
            {prop.user.name}:{prop.user.amount}
            {prop.user.date.toDateString()}
          </li>
        </ul>
        <button
          onClick={() => {
            handleDelet(prop.user);
          }}>
          delet
        </button>
        {/*we need to string to render the date to ensure that'not object */}
      </div>
    </div>
  );
}
