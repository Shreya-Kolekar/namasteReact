/*
 * <div id = "parent">
 *   <div id= "child">
 *       <h1>I am an h1 tag </h1>
 *       </div>
 * </div>
 */

// For creating element siblings : use array

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
// here render converts the obj parent into html element
