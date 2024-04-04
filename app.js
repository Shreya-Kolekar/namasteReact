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

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/564x/b0/1e/69/b01e69dfd04399324803c453b0fb9029.jpg"
        ></img>
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
  );
};



const RestaunrantCard = (props) => {
  const { resData } = props;
  const {name,cuisines,avgRating,deliveryTime,imageSrc} = resData?.data;
  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img
        className="res-logo"
        alt="res-logo"
        src= {imageSrc}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

const resList = [ 
  { 
    type: "restaurant",
    data: {
      id: 1,
      name: "Akkis Bistro",
      cuisines: ['Italian, Mediteranean'],
      avgRating: 4.4,
      deliveryTime: 36,
      imageSrc: "https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=1024x1024&w=is&k=20&c=XXp34bPwWkHPUXbZQRJpR1w2YUSpYZUB_yNdeDlVXlQ="
    }
  },
  { 
    type: "restaurant",
    data: {
      id: 2,
      name: "Pappe DaTasha",
      cuisines: ['Punjabi, North Indian'],
      avgRating: 4.1,
      deliveryTime: 45,
      imageSrc: "https://www.rajbhog.com/wp-content/uploads/2020/12/The-Gems-Of-Punjab-870x635.jpg"

    }
  },
  { 
    type: "restaurant",
    data: {
      id: 3,
      name: "Cafe Coffee Day",
      cuisines: ['Sandwiches, Coffee'],
      avgRating: 4.2,
      deliveryTime: 30,
      imageSrc: "https://media.licdn.com/dms/image/C560BAQHnwCiQyFYl8g/company-logo_200_200/0/1630641246472/cafe_coffee_day_logo?e=2147483647&v=beta&t=ouU5ytPEv2sWCqoYijrMjWdysW7UNxPPIS22tKj6jjw"
    }
  }
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map((restaurant) => (<RestaunrantCard key={restaurant.data.id} resData={restaurant} />) )
        }
      </div>
    </div>
  );
};

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
