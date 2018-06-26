import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListIcon from '@material-ui/icons/List';

import { Link } from 'react-router-dom';

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
        {/*project*/}
        <Link to="/project/admin" style={{ textDecoration: 'none' }}>
          <ListItem button color="primary" onClick={props.close}>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Proyectos" />
          </ListItem>
        </Link>

        {/*req*/}
        <Link to="/req/admin" style={{ textDecoration: 'none' }}>
          <ListItem button onClick={props.close}>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Requerimientos" />
          </ListItem>
        </Link>

        {/*developer*/}
        <Link to="/developer/admin" style={{ textDecoration: 'none' }}>
          <ListItem button onClick={props.close}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Desarrolladores" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}

DrawerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerMenu);
