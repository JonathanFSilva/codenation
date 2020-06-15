import produce from 'immer';

const INITIAL_STATE = {
  open: true,
};

export default function sidebar(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@sidebar/HANDLE_TOGGLE': {
        draft.open = action.payload.value;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.open = INITIAL_STATE.open;
        break;
      }

      default:
        break;
    }
  });
}
