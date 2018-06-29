const projects = (state = [], action) => {
  switch (action.type) {
    case 'CREATE':
      return [
        ...state,
        action.payload
      ];
    case 'FIND':
    case 'UPDATE':
    case 'DELETE':
    default:
      return state;
  }
}

export default projects;
