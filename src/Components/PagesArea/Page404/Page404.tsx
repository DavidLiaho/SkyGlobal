import "./Page404.css";
import image from "../../../Assets/Images/page404.png";
import { NavLink } from "react-router-dom";


export function Page404(): JSX.Element {
    return (
        <div className="Page404">
			<img src={image} />
            <h3>The page you are looking for is lost in the clouds!</h3>
            <NavLink to="/home">Home</NavLink>
        </div>
    );
}
