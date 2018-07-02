import React from 'react';
import { connect } from 'react-redux';
import ProjectList from '../../components/project/List';
import { fetch_projects } from '../../actions/project';

class Admin extends React.Component {
  componentDidMount() {
    this.props.fetch_projects();
  }

  render () {
    return (
      <div>
        <p>Projects admin page</p>
        <ProjectList projects = { this.props.projects }/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps, { fetch_projects })(Admin);
