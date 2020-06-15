import produce from 'immer';

const SEARCH_INITIAL_STATE = {
  isOpen: true,
};

export default function search(state = SEARCH_INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@search/OPEN_SEARCH_DRAWER': {
        draft.isOpen = true;
        break;
      }

      case '@search/CLOSE_SEARCH_DRAWER': {
        draft.isOpen = false;
        break;
      }

      default:
        break;
    }
  });
}
