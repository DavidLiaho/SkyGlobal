import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Home } from "../../PagesArea/Home/Home";
import { About } from "../../PagesArea/About/About";
import { Page404 } from "../../PagesArea/Page404/Page404";
import { ContactUs } from "../../PagesArea/ContactUs/ContactUs";

export function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
