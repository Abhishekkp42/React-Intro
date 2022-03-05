import React from "react"
import ReactDom from "react-dom"

import "./index.css";

// const el= React.createElement(
//     "h1",
//     {
//         className: "color"
//     },
//     "Hello Masai"
// )

// ReactDom.render(
//     el,
//     document.getElementById("root")
// )

ReactDom.render(
        <h1 className="color">Hello Masai</h1>,
        document.getElementById("root")
    )

