import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import DrawerMenu from './DrawerMenu';
import { connect } from 'react-redux';
import { set_drawer_open } from '../../actions/main';

const mailFolderListItems = DrawerMenu;
const otherMailFolderListItems = null;

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {

  closeDrawer = () => {
    this.props.set_drawer_open(false);
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <DrawerMenu />
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    return (
      <div>
        <Drawer open={this.props.drawer_open} onClose={this.closeDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.closeDrawer}
            onKeyDown={this.closeDrawer}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    drawer_open: state.main.drawer_open
  }
}

export default connect(mapStateToProps, { set_drawer_open })(withStyles(styles)(TemporaryDrawer));
