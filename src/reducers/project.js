const defaultState = {
  projects: [],
  loading: false
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
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload.loading
      }
    case 'UPDATE_ITEM':
    case 'DELETE_ITEM':
    default:
      return state;
  }
}
