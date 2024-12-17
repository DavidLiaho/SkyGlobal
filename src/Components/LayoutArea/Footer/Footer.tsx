import "./Footer.css";

export function Footer(): JSX.Element {

    const year = new Date().getFullYear();

    return (
        <div className="Footer">
			<p>All Rights Reserved ® {year} David Liahovitsky - Full Stack Web Developer</p>
        </div>
    );
}