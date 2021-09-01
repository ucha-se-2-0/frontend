export function Loading(props) {
    return (
        <div className={"icon loading " + (props.className ? props.className : "")}>
            <svg>
                <circle style={{ display: "block", width: "10px", height: "10px" }} cx="11" cy="11" r="10" strokeWidth="1" stroke="#000000" strokeDasharray="15.707" fill="none" strokeLinecap="round">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 11 11;360 11 11"></animateTransform>
                </circle>
            </svg>
        </div>
    )
}