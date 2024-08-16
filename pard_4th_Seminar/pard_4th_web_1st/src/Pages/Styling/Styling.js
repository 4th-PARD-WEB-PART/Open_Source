import React from "react";
import "./ExternalStylesheet.css";
import styles from "./CssModule.module.css";

function Styling() {

    return (
        <div>
            <Button/>
        </div>
    );
}

const btnStyle = {
    color: "white",
    background: "teal",
    padding: ".375rem .75rem",
    border: "1px solid teal",
    borderRadius: ".25rem",
    fontSize: "1rem",
    lineHeight: 1.5
}

function Button() {
    return (
        <div>
            {/* fisrt */}
            <button style={btnStyle}>Inline</button>

            {/* second */}
            <button className="btn">External</button>

            {/* third */}
            <button className = {styles.btn}>Module CSS</button>
        </div>
    );
}

export default Styling;