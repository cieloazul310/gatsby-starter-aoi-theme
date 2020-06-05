import * as React from 'react';
import { navigate, withPrefix } from 'gatsby';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// icons
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import { useLocation } from '@reach/router';

function BottomNav() {
  const { pathname } = useLocation();
  const _onChange = (event: React.ChangeEvent<Record<string, unknown>>, value: string) => {
    navigate(value.replace(withPrefix(''), '/'));
  };
  return (
    <BottomNavigation value={pathname} onChange={_onChange} showLabels>
      <BottomNavigationAction label="Top" value={withPrefix('/')} icon={<HomeIcon />} />
      <BottomNavigationAction label="Catalogue" value={withPrefix('/catalogue/')} icon={<ListIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;
