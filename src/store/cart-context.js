import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: function () {},
  removeItem: function () {},
});

export default CartContext;
