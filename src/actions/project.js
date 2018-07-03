import fetch from 'cross-fetch';

export const fetch_projects = () => (dispatch) => {
  dispatch(start_fetch());
  fetch('http://localhost:3030/projects')
    .then(res => {
      dispatch(end_fetch());
      return res.json();
    }, error => {
      dispatch(end_fetch());
      console.log('An error occurred: ', error);
    })
    .then(json => {
      dispatch(insert_items(json));
    });
};

export const start_fetch = () => ({
  type: 'SET_LOADING',
  payload: {
    loading: true
  }
});

export const end_fetch = () => ({
  type: 'SET_LOADING',
  payload: {
    loading: false
  }
});

export const insert_items = (items) => ({
  type: 'INSERT_ITEMS',
  payload: {
    items
  }
});

export const search = (criteria) => ({
  type: 'SEARCH',
  payload: {
    criteria
  }
});

export const update = (item) => ({
  type: 'UPDATE',
  payload: {
    item
  }
});

export const del = (id) => ({
  type: 'DELETE',
  payload: {
    id
  }
});
