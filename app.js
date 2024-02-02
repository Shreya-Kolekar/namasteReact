import React from "react";
import ReactDOM from "react-dom/client";

// Most basic way
const basic_heading = React.createElement("h1",{id : "heading"}, "Namaste React ");

// React Element
const react_heading = (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
);
// root.render(react_heading);

// JSX
const jsxHeading = <h1 id="heading">Namaste React using jsx</h1>;
// root.render(jsxHeading);

// React component
const Title = () => (
    <h1>
        I am the title
    </h1>
);

// React component composition
number = 1000;

const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h1>I am the heading component</h1>
        <h2>{number}</h2>
    </div> 
); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);





