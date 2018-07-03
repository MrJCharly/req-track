import React from 'react';


export default function List (props) {
  if (!props.projects.length > 0) {
    return (
      <p>No projects here.</p>
    );
  }

  return (
    <ul>
      { props.projects.map(showProject) }
    </ul>
  );
}

const showProject = (project) => (
  <li key = { project._id }>
    { project.name }
  </li>
);
