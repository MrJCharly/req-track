import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListIcon from '@material-ui/icons/List';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function DrawerMenu(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button component="a" href="/project/admin">
          <ListItemText primary="Proyectos" />
        </ListItem>
        <ListItem button component="a" href="/req/admin">
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Requerimientos" />
        </ListItem>
        <ListItem button component="a" href="/developer/admin">
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Desarrolladores" />
        </ListItem>
      </List>
    </div>
  );
}

DrawerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerMenu);
