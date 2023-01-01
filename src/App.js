import "bootstrap/dist/css/bootstrap.min.css";
import WebFont from "webfontloader";
import { useEffect } from "react";
import "./App.css";
import AddExpense from "./components/AddExpenses/AddExpense";
import ExpenseList from "./components/Expenses/ExpenseList";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import TotalSpent from "./components/TotalSpent";
import { ExpenseProvider } from "./context/expense-context";

function App() {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Montserrat"],
			},
		});
	}, []);
	return (
		<ExpenseProvider>
			<main>
				<div className="container">
					<div className="main__container pt-3 pb-3">
						<div className="row">
							<div className="col">
								<h4 className="top__title mt-3 fw-bold text-center text-uppercase">
									Budget Planner
								</h4>
							</div>
						</div>
						<div className="row mt-4">
							<div className="col-md-4 order-lg-3">
								<Budget />
							</div>
							<div className="col-md-4 order-lg-2">
								<TotalSpent />
							</div>
							<div className="col-md-4 order-lg-1">
								<Remaining />
							</div>
						</div>
						<div className="row mt-3 align-items-stretch align-items-lg-start">
							<div className="col-md-4 order-lg-2 order-md-2">
								<div className="col bg-light p-4 p-lg-5 rounded-3">
									<h4 className="mb-3">
										<strong>Add Expenses</strong>
									</h4>
									<AddExpense />
								</div>
							</div>
							<div className="col-md-8 order-lg-1 order-md-2 mt-4 mt-md-0 mt-lg-0">
								<div className="col bg-light p-4 p-lg-5 rounded-3">
									<h4>
										<strong>Expenses</strong>
									</h4>
									<ExpenseList />
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</ExpenseProvider>
	);
}

export default App;
