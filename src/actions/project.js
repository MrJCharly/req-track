import fetch from 'cross-fetch';

export const fetch_projects = () => (dispatch) => {
  dispatch(start_fetch());
  fetch('http://localhost:3030/projects')
    .then(res => {
      return res.json();
    }, error => {
      console.log('An error occurred: ', error);
    })
    .then(json => {
      console.log('Data arrived: ');
    });
  dispatch(end_fetch());
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

export const create = (item) => ({
  type: 'CREATE',
  payload: {
    item
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
