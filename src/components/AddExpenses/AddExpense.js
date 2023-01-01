import { useContext, useState } from "react";
import uuid from "react-uuid";
import { ExpenseCtx } from "../../context/expense-context";

export default function AddExpense() {
	const { dispatch } = useContext(ExpenseCtx);
	const [expName, setExpName] = useState("");
	const [expCost, setExpCost] = useState("");

	const addExpenseHandler = (e) => {
		e.preventDefault();

		if (expName === "") return;

		const expense = {
			id: uuid(),
			name: expName,
			cost: +expCost,
		};

		dispatch({ type: "ADDEXP", payload: expense });

		setExpName("");
		setExpCost("");
	};

	return (
		<form onSubmit={addExpenseHandler}>
			<div className="mb-3">
				<label htmlFor="expenseName" className="form-label">
					Name
				</label>
				<input
					type="text"
					className="form-control"
					id="expenseName"
					value={expName}
					onChange={(e) => setExpName(e.target.value)}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="expenseCost" className="form-label">
					Cost
				</label>
				<input
					type="number"
					className="form-control"
					id="expenseCost"
					value={expCost}
					onChange={(e) => setExpCost(e.target.value)}
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Save
			</button>
		</form>
	);
}
