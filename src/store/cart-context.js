import React from "react";

// initial values in the context
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: function () {},
  removeItem: function () {},
  clearCart: function () {},
});

export default CartContext;
