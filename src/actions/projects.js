export const create = (item) => ({
  type: 'CREATE',
  payload: {
    item
  }
});

export const find = (id) => ({
  type: 'FIND',
  payload: {
    id
  }
});

export const update = (item) => ({
  type: 'UPDATE',
  payload: {
    item
  }
});

export const delete = (id) => ({
  type: 'DELETE',
  payload: {
    id
  }
});
