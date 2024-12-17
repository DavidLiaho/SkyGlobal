import "./Header.css";
import logo from "../../../Assets/Images/SkyGlobal-Logo.png";
import { useNavigate } from "react-router-dom";

export function Header(): JSX.Element {

    const navigate = useNavigate();
    function click() {
        navigate("/home");
    }

    return (
        <div className="Header">
			<img src={logo} onClick={click} />
        </div>
    );
}
