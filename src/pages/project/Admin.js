import React from 'react';
import { connect } from 'react-redux';
import ProjectList from '../../components/project/List';
import ProjectTable from '../../components/project/Table';
import { fetch_projects } from '../../actions/project';

class Admin extends React.Component {
  componentDidMount() {
    this.props.fetch_projects();
  }

  render () {
    return (
      <div>
        {/*<ProjectList projects = { this.props.projects }/>*/}
        <ProjectTable projects = { this.props.projects }/>
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
