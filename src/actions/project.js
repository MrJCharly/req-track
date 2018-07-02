import fetch from 'cross-fetch';

export const fetch_projects = () => (dispatch) => {
  fetch('/fetch-projects').then(res => {
    return res.json();
  }, error => {
    console.log('An error occurred: ', error);
  });
};

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
