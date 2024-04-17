import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  - Search
 *  - Retaurant container
 *  - Restaunrant card
 *      - img
 *      - name of res
 *      - star rating
 *      - cuisine
 *      - delivery time
 * Footer
 *  -Copyright
 *  -links
 *  -address
 *  -contact
 */


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
