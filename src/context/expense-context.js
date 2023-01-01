import { createContext, useReducer } from "react";
const x = localStorage.getItem("exp");
const y = JSON.parse(x);
const initialState = {
	budget:
		localStorage.getItem("exp") !== null &&
		y.budget !== null &&
		y.budget !== undefined
			? +y.budget
			: 1000,
	expenses:
		localStorage.getItem("exp") !== null &&
		y.expenses !== null &&
		y.expenses !== undefined
			? y.expenses
			: [
					{ id: 1, name: "Shopping", cost: 250 },
					{ id: 2, name: "Holiday", cost: 100 },
			  ],
};

export const ExpenseCtx = createContext();

export const ExpenseProvider = (props) => {
	const [state, dispatch] = useReducer((state, action) => {
		if (action.type === "ADDEXP") {			
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		}
		if (action.type === "REMOVE") {
			return {
				...state,
				expenses: state.expenses.filter((el) => el.id !== action.payload),
			};
		}
		if (action.type === "NEW-BUDGET") {
			return {
				...state,
				budget: action.payload,
			};
		}
	}, initialState);

	// Setting LocalStorage
	localStorage.setItem("exp", JSON.stringify(state));

	console.log(state);

	return (
		<ExpenseCtx.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</ExpenseCtx.Provider>
	);
};
