// Please don't change the pre-written code
// Import the necessary modules here

let cartId = 0;
export class cartModel {
  constructor(userId, productId, quantity) {
    this.id = ++cartId;
    this.userId = userId;
    this.productId = productId;
    this.quantity = Number(quantity);
  }
}
const cartItems = [new cartModel(1, 2, 5), new cartModel(3, 3, 10)];

// userID      // productID     // quantity
//   1              2  shirt              5
//   3              3  saree              10
//   5              2  game               7
//   1              8  book               12
//   1              2  shirt              9

export const addToCart = (userId, productId, quantity) => {
  // Write your code here
  // before adding the cart
  // check that same user is adding the same product or different
  const cartItem = cartItems.find((cart) => {
    return cart.userId === userId && cart.productId === productId;
  });
  // if not found then add the new cart
  if (!cartItem) {
    const cart = new cartModel(userId, productId, quantity);
    cartItems.push(cart);
  } else {
    cartItem.quantity = cartItem.quantity + quantity;
  }

  // Return only the carts that belong to the provided user ID
  const allCarts = getCart(userId);
  return allCarts;
};

export const removeFromCart = (userId, cartItemId) => {
  // Write your code here 
  
};

const getCart = (userId) => {
  // const carts = cartItems.map((cart) => {
  //   return cart.userId === userId;
  // });
  const result = [];
  cartItems.forEach((cart) => {
    if (cart.userId === userId) {
      result.push(cart);
    }
  });
  return result;
};
