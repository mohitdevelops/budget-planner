import { Fragment, useContext, useState } from "react";
import { ExpenseCtx } from "../context/expense-context";

export default function Budget() {
	const [newBudget, setNewBudget] = useState("");
	const [isBudgetVisible, setIsBudgetVisible] = useState(true);
	const { budget, dispatch } = useContext(ExpenseCtx);

	const editBudget = () => {
		setIsBudgetVisible(false);
	};

	const changeBudgetHandler = (e) => {
		e.preventDefault();
		if(newBudget === '') return;
		dispatch({
			type: "NEW-BUDGET",
			payload: newBudget,
		});
		setIsBudgetVisible(true);
		setNewBudget('')
	};

	const curBudget = (
		<Fragment>
			<span>${budget}</span>
			<button type="button" className="btn btn-primary" onClick={editBudget}>
				Edit
			</button>
		</Fragment>
	);

	const changeBudget = (
		<Fragment>
			<form
				onSubmit={changeBudgetHandler}
				className="d-flex w-100 gap-4 justify-content-between mt-2"
			>
				<input
					type="number"
					className="form-control"
					id="budget"
					value={newBudget}
					onChange={(e) => setNewBudget(e.target.value)}
				/>
				<button type="submit" className="btn btn-danger">
					Save
				</button>
			</form>
		</Fragment>
	);

	return (
		<div className="status alert alert-success">
			Budget <br />
			<div className="d-flex align-items-end justify-content-between">
				{isBudgetVisible ? curBudget : changeBudget}
			</div>
		</div>
	);
}
