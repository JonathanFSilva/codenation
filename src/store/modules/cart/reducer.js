import produce from 'immer';

import { formatSlug } from '../../../helpers/slug';

const CART_INITIAL_STATE = {
  isOpen: true,
  items: [],
};

export default function cart(state = CART_INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@cart/OPEN_CART_DRAWER': {
        draft.isOpen = true;
        break;
      }

      case '@cart/CLOSE_CART_DRAWER': {
        draft.isOpen = false;
        break;
      }

      case '@cart/ADD_CART_ITEM': {
        draft.items = [...state.items, action.payload.data];
        break;
      }

      case '@cart/UPDATE_ITEM_QUANTITY': {
        const { items } = state;

        const index = items.findIndex(
          ({ name }) =>
            formatSlug(name) === formatSlug(action.payload.data.name),
        );

        if (index >= 0) {
          items[index].qtde = action.payload.data.qtde;
          draft.items = [...items];
        }
        break;
      }

      case '@cart/REMOVE_CART_ITEM': {
        draft.items = state.items.filter(
          ({ name }) => formatSlug(name) !== formatSlug(action.payload.data),
        );
        break;
      }

      default:
        break;
    }
  });
}
