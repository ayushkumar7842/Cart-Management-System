// Please don't change the pre-written code
// Import the necessary modules here
import { addToCart, removeFromCart } from "../model/cart.model.js";

export const addToCartController = (req, res) => {
  // Write your code here
  const { productId, quantity } = req.query;
  const userId = req.userId;

  const cartItems = addToCart(+userId, +productId, +quantity);

  res.status(200).json({
    success: true,
    item: cartItems,
  });
};

export const removeFromCartController = (req, res) => {
  // Write your code here
  const userId = req.userId;
  const { cartId } = req.query;
  const deletedCart = removeFromCart(+userId, +cartId);
  if (!deletedCart) {
    res.status.json({
      success: false,
      deletedCartItem: deletedCart,
    });
  } else {
    res.status.json({
      success: true,
      deletedCartItem: deletedCart,
    });
  }
};
