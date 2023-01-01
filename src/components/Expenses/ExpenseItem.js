import { useContext } from "react";
import { GrFormClose } from "react-icons/gr";
import { ExpenseCtx } from "../../context/expense-context";

export default function ExpenseItem(props) {

	const { dispatch } = useContext(ExpenseCtx);

	const removeExp = () => {
		dispatch({
			type: "REMOVE",
			payload: props.id,
		});
	};

	return (
		<li className="list-group-item">
			<div className="d-flex w-100 align-items-center justify-content-between">
				<span>{props.name}</span>
				<div>
					<span className="fw-bolder fs-5 me-5">
						$ {props.cost.toFixed(2)}
					</span>
					<GrFormClose className="closeIcon" onClick={removeExp} />
				</div>
			</div>
		</li>
	);
}
