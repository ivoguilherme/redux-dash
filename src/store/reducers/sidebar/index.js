const INITIAL_STATE = {
  isFixed: true
};

export default function sidebar(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return { ...state, isFixed: !state.isFixed };
    default:
      return state;
  }
}
