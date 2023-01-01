import { useContext } from "react";
import { ExpenseCtx } from "../context/expense-context";

export default function TotalSpent() {
	const { expenses } = useContext(ExpenseCtx);

	const totalSpent = expenses.reduce((total, el) => {
		return (total += el.cost);
	}, 0);
	return (
		<div className="status alert alert-warning">
			Total spent <span>${totalSpent.toFixed(2)}</span>
		</div>
	);
}
