import React from "react"
import ReactDOM from "react-dom/client"


const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"zohan from h1 tag"),
    React.createElement("h2",{},"im inside the h2 Tag"),

])])


const heading = React.createElement("h1",{},"Hello World from React")
const root = ReactDOM.createRoot(document.getElementById("root"))
const root2 = ReactDOM.createRoot(document.getElementById("header"))



root2.render(heading);
root.render(parent);