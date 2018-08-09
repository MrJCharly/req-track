import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { set_drawer_open } from '../../actions/main';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Header extends React.Component {
  openDrawer = () => {
    this.props.set_drawer_open(true);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <AppBar position="static">
      <Toolbar>
      <IconButton onClick={this.openDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
      <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit" className={classes.flex}>
      Requirements tracking
      </Typography>
      <Button color="inherit">Login</Button>
      </Toolbar>
      </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    drawer_open: state.main.drawer_open
  }
}

export default connect(mapStateToProps, { set_drawer_open })(withStyles(styles)(Header));
