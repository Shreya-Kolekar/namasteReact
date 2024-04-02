import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  - Search
 *  - Retaurant container
 *  - Restaunrant card
 * Footer
 *  -Copyright
 *  -links
 *  -address
 *  -contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.pinimg.com/564x/b0/1e/69/b01e69dfd04399324803c453b0fb9029.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const AppLayout = () => {
    return (
        <div className ="app">
            <Header/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);






