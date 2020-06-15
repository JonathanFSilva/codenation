export function openCartDrawer() {
  return { type: '@cart/OPEN_CART_DRAWER' };
}

export function closeCartDrawer() {
  return { type: '@cart/CLOSE_CART_DRAWER' };
}

export function addItemToCart(data) {
  return { type: '@cart/ADD_CART_ITEM', payload: { data } };
}

export function updateItemQuantity(data) {
  return { type: '@cart/UPDATE_ITEM_QUANTITY', payload: { data } };
}

export function removeItemFromCart(data) {
  return { type: '@cart/REMOVE_CART_ITEM', payload: { data } };
}
