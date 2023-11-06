export const cart = [];

export function addToCart(productId, quantity) {
  let matchingItem;

  cart.forEach((cartProduct) => {
    if (cartProduct.productId === productId) {
      matchingItem = cartProduct;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId: productId,
      quantity: quantity
    });
  }
}