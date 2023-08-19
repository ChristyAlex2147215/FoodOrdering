import React, { useState, createContext } from 'react';
import menu from "../data/Menu.json";

const OrderContext = createContext();

const data = [
  {
    "index": 0,
    "imgurl": "../assets/FoodImages/pasta.jpg",
    "title": "Pasta",
    "descr": "Description of Image 1",
    "count": 3,
    "state": 1,
    "price": 8.99,
    "rating": 4.5,
    "veg": true
  },
  {
    "index": 1,
    "imgurl": "../assets/FoodImages/burger.jpg",
    "title": "Burger",
    "descr": "Description of Image 2",
    "count": 0,
    "state": 0,
    "price": 6.49,
    "rating": 3.8,
    "veg": false
  },
  {
    "index": 2,
    "imgurl": "../assets/FoodImages/momos.jpg",
    "title": "Momos",
    "descr": "Description of Image 3",
    "count": 5,
    "state": 3,
    "price": 4.99,
    "rating": 4.7,
    "veg": true
  },
  {
    "index": 3,
    "imgurl": "../assets/FoodImages/noodles.jpg",
    "title": "Noodles",
    "descr": "Description of Image 4",
    "count": 2,
    "state": 2,
    "price": 7.99,
    "rating": 4.2,
    "veg": true
  },
  {
    "index": 4,
    "imgurl": "../assets/FoodImages/poori.jpg",
    "title": "Chicken 65",
    "descr": "Description of Image 5",
    "count": 1,
    "state": 4,
    "price": 10.99,
    "rating": 4.8,
    "veg": false
  },
  {
    "index": 5,
    "imgurl": "../assets/FoodImages/poori.jpg",
    "title": "Fried Rice",
    "descr": "Description of Image 5",
    "count": 1,
    "state": 4,
    "price": 8.99,
    "rating": 4.4,
    "veg": true
  },
  {
    "index": 6,
    "imgurl": "../assets/FoodImages/poori.jpg",
    "title": "Biriyani",
    "descr": "Description of Image 5",
    "count": 1,
    "state": 4,
    "price": 12.99,
    "rating": 4.6,
    "veg": false
  },
  {
    "index": 7,
    "imgurl": "../assets/FoodImages/poori.jpg",
    "title": "Apple Juice",
    "descr": "Description of Image 5",
    "count": 1,
    "state": 5,
    "price": 3.99,
    "rating": 4.3,
    "veg": true
  }
];

const OrderProvider = ({ children }) => {

  const [Order, SetOrder] = useState(data);

  // useEffect(() => {
  //   // Set the order data only once during component mount
  //   SetOrder(menu.data);
  // }, []); // Empty dependency array to run the effect only once

  return (
    <OrderContext.Provider value={{ order: Order, setOrder: SetOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export {OrderContext}
export default OrderProvider
