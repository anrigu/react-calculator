import React from "react";

function Button(props) {
    return(
        <button onClick={() => props.enterDigit(props.value)}>{props.value}</button>
    )
}

export default Button