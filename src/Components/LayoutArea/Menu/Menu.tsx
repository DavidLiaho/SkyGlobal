import { NavLink } from "react-router-dom";
import "./Menu.css";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="/home">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/contact-us">Contact Us</NavLink>
        </div>
    );
}
