import React from 'react';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  loading_bar: {
    flexGrow: 1
  }
}

class LoadingBar extends React.Component {
  render() {
    return (
      <div className = { styles.loading_bar }>
        { this.props.loading ? <LinearProgress color = 'secondary' /> : '' }
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    loading: state.project.loading
  }
}

export default connect(mapStateToProps)(LoadingBar);
