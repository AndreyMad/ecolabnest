import * as React from 'react';
import { MenuItemLink } from 'react-admin';
import {
  GroupSharp,
} from '@material-ui/icons';

export const Menu = () => (
  <div>
    <MenuItemLink to="/users" primaryText="Users" leftIcon={<GroupSharp />} />
  </div>
);
