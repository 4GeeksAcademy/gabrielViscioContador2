import React from "react";

const SecondsCounter = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Seconds Counter</h1>
            <h2>{props.segundos}</h2>
        </div>
    );
};

export default SecondsCounter;
