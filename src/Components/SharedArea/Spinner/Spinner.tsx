import "./Spinner.css";
import spinner from "../../../Assets/GIFs/Spinner.gif";

export function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
			<h3>Loading...</h3>
            <h4>Please wait</h4>
            <img src={spinner} />
        </div>
    );
}
