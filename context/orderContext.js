import React, { useState, createContext } from 'react';
import data from "../data/Menu"

const OrderContext = createContext();

// const data = [
//   {
//     "index": 0,
//     "imgurl": "../assets/FoodImages/pasta.jpg",
//     "title": "Pasta",
//     "descr": "Classic Italian pasta dish with al dente noodles served in a rich tomato sauce, garnished with fresh basil and parmesan cheese. A comfort food favorite.",
//     "ingredients": [
//       "Noodles",
//       "Tomato Sauce",
//       "Fresh Basil",
//       "Parmesan Cheese"
//     ],
//     "count": 3,
//     "state": 1,
//     "price": 8.99,
//     "rating": 4.5,
//     "veg": true
//   },
//   {
//     "index": 1,
//     "imgurl": "../assets/FoodImages/burger.jpg",
//     "title": "Burger",
//     "descr": "Juicy beef patty layered with crispy lettuce, ripe tomato, melted cheese, and tangy sauce, all sandwiched between soft burger buns. A classic American delight.",
//     "ingredients": [
//       "Beef Patty",
//       "Lettuce",
//       "Tomato",
//       "Cheese",
//       "Burger Buns"
//     ],
//     "count": 0,
//     "state": 0,
//     "price": 6.49,
//     "rating": 3.8,
//     "veg": false
//   },
//   {
//     "index": 2,
//     "imgurl": "../assets/FoodImages/momos.jpg",
//     "title": "Momos",
//     "descr": "Steamed dumplings filled with a delectable mixture of minced vegetables and fragrant spices. Served with a savory dipping sauce. A popular street food in many Asian countries.",
//     "ingredients": [
//       "Dumpling Wrappers",
//       "Minced Vegetables",
//       "Spices",
//       "Dipping Sauce"
//     ],
//     "count": 5,
//     "state": 3,
//     "price": 4.99,
//     "rating": 4.7,
//     "veg": true
//   },
//   {
//     "index": 3,
//     "imgurl": "../assets/FoodImages/noodles.jpg",
//     "title": "Noodles",
//     "descr": "Stir-fried noodles with an assortment of fresh vegetables and your choice of protein, all tossed in a savory soy-based sauce. A quick and flavorful dish from Asian cuisine.",
//     "ingredients": [
//       "Noodles",
//       "Assorted Vegetables",
//       "Protein (Chicken, Tofu, etc.)",
//       "Soy-based Sauce"
//     ],
//     "count": 2,
//     "state": 2,
//     "price": 7.99,
//     "rating": 4.2,
//     "veg": true
//   },
//   {
//     "index": 4,
//     "imgurl": "../assets/FoodImages/poori.jpg",
//     "title": "Chicken 65",
//     "descr": "Spicy and flavorful deep-fried chicken dish, known for its vibrant red color and bold spices. A popular appetizer or side dish in Indian cuisine.",
//     "ingredients": [
//       "Chicken Pieces",
//       "Spices",
//       "Oil for Deep Frying"
//     ],
//     "count": 1,
//     "state": 4,
//     "price": 10.99,
//     "rating": 4.8,
//     "veg": false
//   },
//   {
//     "index": 5,
//     "imgurl": "../assets/FoodImages/poori.jpg",
//     "title": "Fried Rice",
//     "descr": "Stir-fried rice combined with assorted vegetables, eggs, and a choice of meat or tofu. Seasoned with soy sauce and other spices, creating a well-balanced and satisfying dish.",
//     "ingredients": [
//       "Cooked Rice",
//       "Assorted Vegetables",
//       "Eggs",
//       "Meat or Tofu",
//       "Soy Sauce"
//     ],
//     "count": 1,
//     "state": 4,
//     "price": 8.99,
//     "rating": 4.4,
//     "veg": true
//   },
//   {
//     "index": 6,
//     "imgurl": "../assets/FoodImages/poori.jpg",
//     "title": "Biriyani",
//     "descr": "Aromatic and flavorful rice dish cooked with fragrant spices, tender meat (or vegetables), and long-grain basmati rice. A beloved specialty in Indian and Middle Eastern cuisines.",
//     "ingredients": [
//       "Basmati Rice",
//       "Fragrant Spices",
//       "Tender Meat (Chicken, Lamb, etc.) or Vegetables"
//     ],
//     "count": 1,
//     "state": 4,
//     "price": 12.99,
//     "rating": 4.6,
//     "veg": false
//   },
//   {
//     "index": 7,
//     "imgurl": "../assets/FoodImages/poori.jpg",
//     "title": "Apple Juice",
//     "descr": "Refreshing and natural apple juice made from freshly harvested apples. A thirst-quenching option to complement your meal or enjoy on its own.",
//     "ingredients": [
//       "Fresh Apples"
//     ],
//     "count": 1,
//     "state": 5,
//     "price": 3.99,
//     "rating": 4.3,
//     "veg": true
//   }
// ];



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
