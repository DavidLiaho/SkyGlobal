import "./Arrow.css";

type ArrowProps = {
    degree: number;
};

export function Arrow(props: ArrowProps): JSX.Element {
    return (
        <div className="Arrow" style={{ transform: `rotate(${props.degree}deg)` }}>
            &#8595; {/* You can use an HTML entity for a down arrow, or use an image/icon */}
        </div>
    );
}
