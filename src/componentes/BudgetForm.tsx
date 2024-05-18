import { useState } from "react";

export default function BudgetForm() {
  const [budget, setBudget] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    console.log(e.target.id);
  };

  return (
    <form className="space-y-5">
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-4xl text-blue-600 font-bold text-center"
        >
          {" "}
          Definir Presupuesto
        </label>
        <input
          type="number"
          id="budgetID"
          className="w-full bg-white border border-gray-200 p-2"
          placeholder="Define tu presupuesto"
          name="budget"
          value={budget}
          onChange={handleChange}
        />
      </div>

      <input
        type="submnit"
        value="definir Presupuesto"
        className="bg-blue-600 hover:bg-blue-600 cursor-pointer w-full p-2 text-white font-bold uppercase text-center"
      />
    </form>
  );
}
