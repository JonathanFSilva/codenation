import produce from 'immer';

const PRODUCTS_INITIAL_STATE = {
  products: [],
  loadingProducts: false,
};

export default function chat(state = PRODUCTS_INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@products/GET_PRODUCTS_REQUEST': {
        draft.loadingProducts = true;
        break;
      }

      case '@products/GET_PRODUCTS_SUCCESS': {
        draft.products = action.payload.data;
        draft.loadingProducts = false;
        break;
      }

      case '@products/GET_PRODUCTS_FAILURE': {
        draft.loadingProducts = false;
        break;
      }

      default:
        break;
    }
  });
}
