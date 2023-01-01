import { Fragment, useContext, useEffect, useState } from "react";
import { ExpenseCtx } from "../../context/expense-context";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
	const { expenses } = useContext(ExpenseCtx);

	const [newSearchList, setNewSearchList] = useState(expenses || []);

	useEffect(() => {
		setNewSearchList(expenses);
	}, [expenses]);

	const searching = (e) => {
		const searchList = expenses.filter((el) => {
			return el.name.toLowerCase().includes(e.target.value);
		});
		setNewSearchList(searchList);
	};

	const searchHandler = e => {
		e.preventDefault();
	}

	return (
		<Fragment>
			<form onSubmit={searchHandler} className="d-flex mb-4 mt-3">
				<input
					className="form-control"
					type="search"
					placeholder="Search Expense"
					onChange={searching}
				/>
			</form>
			<ul className="list-group rounded-0">
				{newSearchList.map((el) => {
					return (
						<ExpenseItem key={el.id} id={el.id} name={el.name} cost={el.cost} />
					);
				})}
			</ul>
		</Fragment>
	);
}
