import React from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={() => setCartIsShown(false)} />}
      <Header onShowCart={() => setCartIsShown(true)} />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </CartProvider>
  );
}

export default App;
