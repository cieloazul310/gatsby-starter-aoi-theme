import * as React from 'react';
import { withPrefix } from 'gatsby';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// icons
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import ListItemAppLink from 'gatsby-theme-aoi/src/components/ListItemAppLink';
import { useLocation } from '@reach/router';

function Contents() {
  const { pathname } = useLocation();
  return (
    <List subheader={<ListSubheader>Contents</ListSubheader>} role="menu">
      <ListItemAppLink to="/" button selected={pathname === withPrefix('/')} role="menuitem">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Top" />
      </ListItemAppLink>
      <ListItemAppLink to="/catalogue/" button selected={pathname === withPrefix('/catalogue/')} role="menuitem">
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="Catalogue" />
      </ListItemAppLink>
      <ListItemAppLink to="/tab-page/" button selected={pathname === withPrefix('/tab-page/')} role="menuitem">
        <ListItemIcon>
          <SportsHandballIcon />
        </ListItemIcon>
        <ListItemText primary="Tab Layout" />
      </ListItemAppLink>
      <ListItemAppLink to="/jumbotron/" button selected={pathname === withPrefix('/jumbotron/')} role="menuitem">
        <ListItemIcon>
          <SportsHandballIcon />
        </ListItemIcon>
        <ListItemText primary="Jumbotron Layout" />
      </ListItemAppLink>
      <ListItemAppLink to="/without-drawer/" button selected={pathname === withPrefix('/without-drawer/')} role="menuitem">
        <ListItemIcon>
          <SportsHandballIcon />
        </ListItemIcon>
        <ListItemText primary="Full Width Layout" />
      </ListItemAppLink>
    </List>
  );
}

export default Contents;
