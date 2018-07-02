const defaultState = {
  projects: []
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        projects: [...state.projects, action.payload.item]
      };
    case 'INSERT_ITEMS':
      return {
        ...state,
        projects: action.payload.items
      }
    case 'UPDATE_ITEM':
    case 'DELETE_ITEM':
    default:
      return state;
  }
}
