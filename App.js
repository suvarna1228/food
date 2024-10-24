
import React from "react";
import ReactDOM from "react-dom/client";

// react element  react.createelement => object => htmlelement(render)
// const heading = React.createElement(
//     "h1",
//     {id:"heading"}, 
//     "namaste react"
// );
// console.log(heading);
// jsx
const Title = () => <h1 className="head" tabIndex="5">hiiii</h1>;

// react functional component
const HeadingCompononet = () =>{
    <div id="container">
        <Title/>
    <h1 className="heading">namate</h1>
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingCompononet/>);
