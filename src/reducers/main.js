const default_state = {
  drawer_open: false
}

export default (state = default_state, action = {}) => {
  switch (action.type) {
    case 'SET_DRAWER_OPEN':
      return {
        ...state,
        drawer_open: action.payload.drawer_open
      };
    default: return state;
  }
}
